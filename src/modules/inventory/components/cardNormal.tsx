import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Producto } from "@/types/Producto";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ProductForm } from "@/modules/inventory/components/ProductForm";
import { ScrollArea } from "@/components/ui/scroll-area";
import { categoryColors } from "../data/data";

interface CardNormalProps {
  product: Producto;
  className?: string;
}

export const CardNormal: React.FC<CardNormalProps> = ({
  product,
  className,
}) => {
  const [isLoading, setLoading] = useState(true);
  const [isPending, setIsPending] = useState(false);
  const [open, setOpen] = useState(false);
  const [productState, setProduct] = useState(product);
  const imageClasses = `w-full h-full object-cover duration-700 ease-in-out ${
    isLoading ? "scale-105 blur-lg" : "scale-100 blur-0"
  }`;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <Card className={className}>
          <CardHeader className="text-start">
            <CardTitle>{productState.nombre}</CardTitle>
            <CardDescription className="text-2xl columns-2">
              {"S/. " + productState.precio}
              <Badge
                style={{ backgroundColor: categoryColors[product.categoria] }}
              >
                {product.categoria}
              </Badge>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="imageContainer overflow-hidden w-full h-64 rounded-">
              <img
                src={productState.imagen}
                alt={productState.nombre}
                onLoad={() => setLoading(false)}
                className={imageClasses}
              />
            </div>
          </CardContent>
        </Card>
      </DialogTrigger>
      <DialogContent className="max-w-6xl">
        <div className="flex">
          <div className="w-1/2 ">
            <div className="imageContainer overflow-hidden rounded-sm">
              <img
                src={productState.imagen}
                alt={productState.nombre}
                onLoad={() => setLoading(false)}
                className={imageClasses}
              />
            </div>
          </div>
          <div className="w-1/2 p-4 ">
            <ScrollArea type="always" style={{ height: 530 }}>
              <Card className="h-full  rounded-sm">
                <ProductForm
                  product={productState}
                  setIsPending={setIsPending}
                  setProducts={setProduct}
                  setIsOpen={setOpen}
                />
              </Card>
            </ScrollArea>
          </div>
        </div>
        <DialogFooter className="flex sm:justify-between gap-4">
          <DialogClose asChild>
            <Button className="w-full" variant="outline">
              Cerrar
            </Button>
          </DialogClose>
          <Button
            className="w-full"
            disabled={isPending}
            type="submit"
            form="add-product-form"
          >
            {isPending && (
              <Loader2
                className="mr-2 h-4 w-4 animate-spin"
                aria-hidden="true"
              />
            )}
            Agregar
            <span className="sr-only">Agregar nuevo usuario</span>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
