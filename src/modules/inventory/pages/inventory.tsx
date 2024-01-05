import React, { useEffect, useState } from "react";
import { CardNormal } from "../components/cardNormal";
import { HorizontalCard } from "../components/horizontalCard";
import { VerticalCard } from "../components/verticalCard";
import { Search } from "@/components/ui/search";
import { Button } from "@/components/ui/button";
import { Grid3X3, GripHorizontal, Rows } from "lucide-react";
import { data } from "../data/data";
import { FilterInventory } from "@/components/FilterInventory";

export const Inventory = () => {
  const [activeType, setActiveType] = useState("normal");
  const [display, setDisplay] = useState("col");

  const showCardsOfType = (type: string) => {
    setActiveType(type);
  };
  useEffect(() => {
    switch (activeType) {
      case "normal":
        setDisplay("grid lg:grid-cols-auto-fit sm:grid-cols-2 gap-4");
        break;
      case "horizontal":
        setDisplay("grid lg:grid-cols-3 sm:grid-cols-1 gap-4");
        break;
      case "vertical":
        setDisplay("flex flex-col gap-4");
        break;
    }
  }, [activeType]);
  return (
    <>
      <div className="columns-3 my-4">
        <div className="flex-none">
          <Search icon={"Search"} />
        </div>
        <FilterInventory />

        <div className="button button-group flex flex-row-reverse">
          <Button
            onClick={() => showCardsOfType("normal")}
            className={activeType === "normal" ? "bg-sky-300/30" : ""}
          >
            <GripHorizontal />
          </Button>
          <Button
            onClick={() => showCardsOfType("horizontal")}
            className={activeType === "horizontal" ? "bg-sky-500/30" : ""}
          >
            <Grid3X3 />
          </Button>
          <Button
            onClick={() => showCardsOfType("vertical")}
            className={activeType === "vertical" ? "bg-sky-500/30" : ""}
          >
            <Rows />
          </Button>
        </div>
      </div>
      <div className={display}>
        {data.map((product: { id: React.Key | null | undefined }) => {
          switch (activeType) {
            case "normal":
              return (
                <CardNormal
                  className={"rounded-[20px]"}
                  key={product.id}
                  product={product}
                />
              );
            case "horizontal":
              return (
                <HorizontalCard
                  key={product.id}
                  product={product}
                  className={"rounded-[20px]"}
                />
              );
            case "vertical":
              return <VerticalCard key={product.id} product={product} />;
            default:
              return null;
          }
        })}
      </div>
    </>
  );
};
