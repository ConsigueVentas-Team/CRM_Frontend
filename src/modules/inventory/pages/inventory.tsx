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

export const Inventory = () => {
  const [activeType, setActiveType] = useState("normal");
  const [display, setDisplay] = useState("col");
  const [filteredProducts, setFilteredProducts] =
    useState<Producto[]>(productos);

  const handleFilter = (filtered: Producto[]) => {
    setFilteredProducts(filtered);
  };
  const showCardsOfType = (type: string) => {
    setActiveType(type);
  };
  useEffect(() => {
    switch (activeType) {
      case "normal":
        setDisplay("grid lg:grid-cols-5 sm:grid-cols-2 gap-4 pb-5");
        break;
      case "horizontal":
        setDisplay("grid lg:grid-cols-3 sm:grid-cols-1 gap-4");
        break;
      case "vertical":
        setDisplay("grid grid-cols-1 gap-4");
        break;
    }
  }, [activeType]);

  const renderCards = (products: Producto[]) => {
    return products.map((product: Producto) => (
      <ProductCard
        key={product.id}
        product={product}
        activeType={activeType}
      />
    ));
  };
  return (
    <>
      <div className="flex justify-between my-8">
        <div className="flex gap-4">
          <Search icon={"Search"} />
          <AddProduct />
        </div>

        <div className="flex flex-row-reverse gap-5">
          <div className="button button-group flex flex-row-reverse ">
            <div dir="ltr">
              <Button
                variant={"outline"}
                onClick={() => showCardsOfType("vertical")}
                className={cn(
                  "rounded-s-[0px] focus:bg-blue-500 focus:text-white",
                  activeType === "vertical"
                    ? "bg-blue-500 text-white"
                    : "bg-foreground/10 text-muted-foreground"
                )}
              >
                <Rows />
              </Button>
            </div>
            <Button
              variant={"outline"}
              onClick={() => showCardsOfType("horizontal")}
              className={cn(
                "rounded-[0px]  focus:bg-blue-500 focus:text-white",
                activeType === "horizontal"
                  ? "bg-blue-500 text-white"
                  : "bg-foreground/10 text-muted-foreground"
              )}
            >
              <Grid2X2 />
            </Button>
            <div dir="rtl">
              <Button
                variant={"outline"}
                onClick={() => showCardsOfType("normal")}
                className={cn(
                  "rounded-s-[0px] focus:bg-blue-500 focus:text-white",
                  activeType === "normal"
                    ? "bg-blue-500 text-white"
                    : "bg-foreground/10 text-muted-foreground"
                )}
              >
                <Grid3X3 />
              </Button>
            </div>
          </div>
          <FilterInventory onFilter={handleFilter} />
        </div>
      </div>
      <div className={display}>{renderCards(filteredProducts)}</div>
    </>
  );
};
