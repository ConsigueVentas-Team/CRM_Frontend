import { Card, CardTitle } from "@/components/ui/card";
import React, { useState } from "react";
// import { BorderStyle } from "./borderStyle";
import { Producto } from "@/types/Producto";
interface VerticalProps {
  product: Producto;
}

export const VerticalCard: React.FC<VerticalProps> = ({ product }) => {
  const [isLoading, setLoading] = useState(true);

  const imageClasses = `flex rounded-[20px] p-4 ${
    isLoading ? "scale-105 blur-lg" : "scale-100 blur-0"
  }`;
  return (
    <Card className="w-full">
      <div className="flex md:flex-row sm:flex-col gap-4  items-center">
        <img
          src={product.image_url}
          onLoad={() => setLoading(false)}
          className={imageClasses}
          width={"200px"}
          height={"180px"}
        ></img>
        <CardTitle>{product.name}</CardTitle>
        {/* <BorderStyle categoria={product.category} /> */}
        <p className="text-4xl">{"S/. " + product.price}</p>
      </div>
    </Card>
  );
};
