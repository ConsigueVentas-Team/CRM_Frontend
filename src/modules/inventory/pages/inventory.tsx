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
import { SERVICE, PRODUCT } from '../config'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AddService from "../components/AddService";
import { ServiceCard } from "../components/ServiceCard";
import { Service } from "@/types/service";
import { ServiceDialog } from "../components/ServiceDialog";



export type DisplayType = "gridView" | "detailedView" | "listView";

interface ProductCardsProps {
  itemsInventory: Product[] | Service[];
  activeType: DisplayType;
  activeTab: string;
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

//import { Product, Service } from './tuArchivoDeTipos'; // Asegúrate de importar los tipos adecuados

function ItemsCards({ itemsInventory, activeType, activeTab }: ProductCardsProps) {
  return (
    itemsInventory.length > 0
      ? itemsInventory.map((itemInventory: Product | Service) => {
        if (activeTab === PRODUCT && isProduct(itemInventory)) {
          return (
            <ProductDialog
              key={itemInventory.id}
              product={itemInventory}
              activeType={activeType}
              className={cardClasses[activeType]}
            />
          );
        } else if (activeTab === SERVICE && isService(itemInventory)) {
          return (
            <ServiceDialog
              key={itemInventory.id}
              service={itemInventory}
              activeType={activeType}
              className={cardClasses[activeType]}
            />
          );
        } else {
          return null;
        }
      })
      : <div><AlignVerticalSpaceBetween /></div>
  );
}

// Funciones de utilidad para verificar el tipo de objeto
function isProduct(item: Product | Service): item is Product {
  return (item as Product).stock !== undefined; // Suponiendo que `category` es una propiedad de Product
}

function isService(item: Product | Service): item is Service {
  return (item as Service).service_time !== undefined; // Suponiendo que `otraPropiedad` es una propiedad de Service
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
  const [activeTab, setActiveTab] = useState(PRODUCT)

  const handleFilter = (filtered: Product[]) => {
    setFilteredProducts(filtered);
  };

  const showCardsOfType = (type: DisplayType) => {
    setActiveType(type);
    setDisplay(layoutClasses[type]);
  };


  const { data, isLoading, hasNextPage, fetchNextPage } = useInfiniteQuery(
    [`${activeTab}`, search],
    async ({ pageParam = 1 }) => {
      const searchUrl = search
        ? `/${activeTab}?name=${search}&page=${pageParam}`
        : `/${activeTab}?page=${pageParam}`;
      const response = await api.get(searchUrl);
      return response.data;
    },
    {
      getNextPageParam: (lastPage) => {
        if (lastPage.pagination.current_page === lastPage.pagination.total_pages) return false;
        return lastPage.pagination.current_page + 1;
      },
    }
  );


  /* itemsInventory */
  const itemsInventory =
    data?.pages.reduce(
      (prevProducts, page) => prevProducts.concat(page.data),
      []
    ) ?? [];

  return (
    <>
      <div className="2xl:flex justify-between mb-8 gap-4">
        <div className="flex justify-between xl:justify-start xl:gap-4">
          <Search icon={"Search"} setSearch={setSearch} />
          {activeTab == PRODUCT ? <AddProduct /> : <AddService />}

        </div>
        <Tabs defaultValue={PRODUCT} className="w-[400px]">
          <TabsList>
            <TabsTrigger value={PRODUCT} onClick={() => { console.log("entro"); return setActiveTab(PRODUCT) }}>Producto</TabsTrigger>
            <TabsTrigger value={SERVICE} onClick={() => setActiveTab(SERVICE)}>Servicio</TabsTrigger>
          </TabsList>
        </Tabs>

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
        dataLength={itemsInventory.length}
        hasMore={hasNextPage || isLoading}
        next={() => fetchNextPage()}
        loader={<div className={cn("gap-4 pb-5", display)}>
          <ProductSkeleton activeType={activeType} />
        </div>}
      >
        {
          !isLoading && itemsInventory.length > 0 &&
          <div className={cn("gap-4 pb-5", display)}>
            <ItemsCards itemsInventory={itemsInventory} activeType={activeType} activeTab={activeTab} />
          </div>
        }
        {
          itemsInventory.length == 0 &&
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
