import React, { useEffect, useState } from "react";
import { CardNormal } from "../components/cardNormal";
import { HorizontalCard } from "../components/horizontalCard";
import { VerticalCard } from "../components/verticalCard";
import { Search } from "@/components/ui/search";
import { Button } from "@/components/ui/button";
import { Grid3X3, GripHorizontal, Rows } from "lucide-react";
import { productos } from "../data/data";
import { FilterInventory } from "@/components/FilterInventory";
import { Producto } from "@/types/Producto";

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
        setDisplay("grid lg:grid-cols-5 sm:grid-cols-2 gap-4");
        break;
      case "horizontal":
        setDisplay("grid lg:grid-cols-3 sm:grid-cols-1 gap-4");
        break;
      case "vertical":
        setDisplay("flex flex-col gap-4");
        break;
    }
  }, [activeType]);
  const renderCards = (products: Producto[]) => {
    return products.map((product:Producto) => {
      switch (activeType) {
        case "normal":
          return (
            <CardNormal
              className="rounded-[20px]"
              key={product.id}
              product={product}
            />
          );
        case "horizontal":
          return (
            <HorizontalCard
              className="rounded-[20px]"
              product={product}
              key={product.id}
            />
          );
        case "vertical":
          return <VerticalCard key={product.id} product={product} />;
        default:
          return null;
      }
    });
  };
  return (
    <>
      <div className="columns-3 my-4">
        <div className="flex-none">
          <Search icon={"Search"} />
        </div>
        <FilterInventory onFilter={()=>handleFilter} />
        <div className="button button-group flex flex-row-reverse">
          <div dir="ltr">
            <Button
              variant={"outline"}
              onClick={() => showCardsOfType("vertical")}
              className={`rounded-s-[0px] ${
                activeType === "vertical"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300"
              }`}
            >
              <Rows />
            </Button>
          </div>
          <Button
            variant={"outline"}
            onClick={() => showCardsOfType("horizontal")}
            className={`rounded-[0px] ${
              activeType === "horizontal"
                ? "bg-blue-500 text-white"
                : "bg-gray-300"
            }`}
          >
            <GripHorizontal />
          </Button>
          <div dir="rtl">
            <Button
              variant={"outline"}
              onClick={() => showCardsOfType("normal")}
              className={`rounded-s-[0px] ${
                activeType === "normal"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300"
              }`}
            >
              <Grid3X3 />
            </Button>
          </div>
        </div>
      </div>
      <div className={display}>{renderCards(filteredProducts)}</div>
    </>
  );
};
