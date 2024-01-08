import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Producto } from "@/types/Producto";

interface CardNormalProps {
  product: Producto;
  className?: string;
}

export const CardNormal: React.FC<CardNormalProps> = ({
  product,
  className,
}) => {
  const [isLoading, setLoading] = useState(true);

  const imageClasses = `w-full h-full object-cover duration-700 ease-in-out ${
    isLoading ? "scale-105 blur-lg" : "scale-100 blur-0"
  }`;

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>{product.nombre}</CardTitle>
        <CardDescription className="text-2xl">
          {"S/. " + product.precio}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <img
          src={product.imagen}
          alt={product.nombre}
          onLoad={() => setLoading(false)}
          className={imageClasses}
        />
      </CardContent>
      <CardDescription className="text-2xl m-2">
        {"S/. " + product.descripcion}
      </CardDescription>
    </Card>
  );
};
