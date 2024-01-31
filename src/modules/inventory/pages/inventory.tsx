import React, { useEffect, useState } from "react";
import { ProductCard } from "../components/ProductCard";
import { Search } from "@/components/ui/search";
import { Button } from "@/components/ui/button";
import { Grid2X2, Grid3X3, Rows } from "lucide-react";
import { productos } from "../data/data";
import { FilterInventory } from "@/components/FilterInventory";
import { Producto } from "@/types/Producto";
import AddProduct from "../components/AddProduct";
import { cn } from "@/lib/utils";

type DisplayType = "gridView" | "detailedView" | "listView";

interface ProductCardsProps {
  products: Producto[];
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
  return products.map((product: Producto) => (
    <ProductCard
      key={product.id}
      product={product}
      activeType={activeType}
      className={cardClasses[activeType]}
    />
  ));
}

export function Inventory() {
  const [activeType, setActiveType] = useState<DisplayType>("gridView");
  const [display, setDisplay] = useState(layoutClasses.gridView);
  const [filteredProducts, setFilteredProducts] =
    useState<Producto[]>(productos);

  const handleFilter = (filtered: Producto[]) => {
    setFilteredProducts(filtered);
  };

  const showCardsOfType = (type: DisplayType) => {
    setActiveType(type);
    setDisplay(layoutClasses[type]);
  };

  return (
    <>
      <div className="xl:flex justify-between my-8 gap-4">
        <div className="flex gap-4">
          <Search icon={"Search"} />
          <AddProduct />
        </div>

        <div className="xl:flex gap-5">
          <FilterInventory onFilter={handleFilter} />
          <div className="flex">
            <ViewButton
              viewType="gridView"
              activeType={activeType}
              showCardsOfType={showCardsOfType}
            >
              <Grid3X3 />
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
      <div className={cn("gap-4 pb-5", display)}>
        <ProductCards products={filteredProducts} activeType={activeType} />
      </div>
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
        "focus:bg-blue-500 focus:text-white",
        activeType === viewType
          ? "bg-blue-500 text-white"
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
