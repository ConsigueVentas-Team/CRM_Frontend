import React, { useState } from "react";
import { Search } from "@/components/ui/search";
import { Button } from "@/components/ui/button";
import { AlignVerticalSpaceBetween, Grid2X2, Grid3X3, Rows } from "lucide-react";
import { FilterInventory } from "@/components/FilterInventory";
import { Product } from "@/types/product";
import AddProduct from "../components/AddProduct";
import { cn } from "@/lib/utils";
import { useInfiniteQuery } from "react-query";
import api from "@/services/api";
import InfiniteScroll from "react-infinite-scroll-component";
import { Skeleton } from "@/components/ui/skeleton"
import { ProductDialog } from "../components/ProductDialog";

export type DisplayType = "gridView" | "detailedView" | "listView";

interface ProductCardsProps {
  products: Product[];
  activeType: DisplayType;
}

interface ProductSkeletonProps {
  activeType: DisplayType;
}

interface ViewButtonProps {
  viewType: DisplayType;
  activeType: DisplayType;
  children: React.ReactNode;
  showCardsOfType: (type: DisplayType) => void;
}

const layoutClasses = {
  gridView:
    "grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1",
  detailedView: "grid 2xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1",
  listView: "grid grid-cols-1 gap-4",
};

const cardClasses: Record<DisplayType, string> = {
  gridView: "col-span-1",
  detailedView: "flex",
  listView: "flex flex-row-reverse h-36",
};

function ProductCards({ products, activeType }: ProductCardsProps) {
  return (
    products.length > 0
      ? products.map((product: Product) => (
        <ProductDialog
          key={product.id}
          product={product}
          activeType={activeType}
          className={cardClasses[activeType]}
        />)
      )
      : <div><AlignVerticalSpaceBetween /></div>
  );
}
function ProductSkeleton({ activeType }: ProductSkeletonProps) {
  const listArr = new Array(10).fill(1)
  return listArr.map(() => (
    <div className={`${cardClasses[activeType]} p-4 `}>
      <div className="flex flex-col mb-4 gap-4 pr-4">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
      <Skeleton className="w-full aspect-square " />
    </div>
  ));
}




export function Inventory() {
  const [activeType, setActiveType] = useState<DisplayType>("gridView");
  const [display, setDisplay] = useState(layoutClasses.gridView);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState("");
  const handleFilter = (filtered: Product[]) => {
    setFilteredProducts(filtered);
  };

  const showCardsOfType = (type: DisplayType) => {
    setActiveType(type);
    setDisplay(layoutClasses[type]);
  };

  const { data, isLoading, hasNextPage, fetchNextPage } = useInfiniteQuery(
    ["products", search],
    async ({ pageParam = 1 }) => {
      const searchUrl = search
        ? `/products?name=${search}&page=${pageParam}`
        : `/products?page=${pageParam}`;
      const response = await api.get(searchUrl);
      return response.data;
    },
    {
      getNextPageParam: (lastPage) => {
        if (
          lastPage.pagination.current_page === lastPage.pagination.total_pages
        )
          return false;
        return lastPage.pagination.current_page + 1;
      },
    }
  );

  const products =
    data?.pages.reduce(
      (prevProducts, page) => prevProducts.concat(page.data),
      []
    ) ?? [];

  return (
    <>
      <div className="2xl:flex justify-between mb-8 gap-4">
        <div className="flex justify-between xl:justify-start xl:gap-4">
          <Search icon={"Search"} setSearch={setSearch} />
          <AddProduct />
        </div>

        <div className="flex flex-col 2xl:flex-row gap-5">
          <FilterInventory
            onFilter={handleFilter}
            products={filteredProducts}
          />
          <div className="flex">
            <ViewButton
              viewType="gridView"
              activeType={activeType}
              showCardsOfType={showCardsOfType}
            >
              {<Grid3X3 />}
            </ViewButton>
            <ViewButton
              viewType="detailedView"
              activeType={activeType}
              showCardsOfType={showCardsOfType}
            >
              <Grid2X2 />
            </ViewButton>
            <ViewButton
              viewType="listView"
              activeType={activeType}
              showCardsOfType={showCardsOfType}
            >
              <Rows />
            </ViewButton>
          </div>
        </div>
      </div>

      <InfiniteScroll
        dataLength={products.length}
        hasMore={hasNextPage || isLoading}
        next={() => fetchNextPage()}
        loader={<div className={cn("gap-4 pb-5", display)}>
          <ProductSkeleton activeType={activeType} />
        </div>}
      >
        {
          !isLoading && products.length > 0 &&
          <div className={cn("gap-4 pb-5", display)}>
            <ProductCards products={products} activeType={activeType} />
          </div>
        }
        {
          products.length == 0 &&
          <div className="flex p-32 justify-center">
            No hay productos
          </div>
        }
      </InfiniteScroll >
    </>
  );
}

function ViewButton({
  viewType,
  activeType,
  children,
  showCardsOfType,
}: ViewButtonProps) {
  return (
    <Button
      variant={"outline"}
      onClick={() => showCardsOfType(viewType)}
      className={cn(
        "focus:bg-primary focus:text-white",
        activeType === viewType
          ? "bg-primary text-white"
          : "bg-foreground/10 text-muted-foreground",
        viewType === "gridView" && "rounded-e-none",
        viewType === "listView" && "rounded-s-none",
        viewType === "detailedView" && "rounded-none"
      )}
    >
      {children}
    </Button>
  );
}
