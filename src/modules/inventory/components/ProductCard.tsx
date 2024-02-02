import React, { useEffect, useState } from "react";
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

<<<<<<< HEAD:src/modules/inventory/components/cardNormal.tsx
=======
import { categoryColors } from "../data/data";
import { cn } from "@/lib/utils";
>>>>>>> c610f82ba3b0046cfa20eb7c92e72742c656e4ad:src/modules/inventory/components/ProductCard.tsx
import { CategoriaDetail } from "@/types/auth";
import { fetchCategorias } from "@/modules/configuration/api/apiService";

interface ProductCardProps {
  product: Producto;
  className?: string;
  activeType?: string;
}

<<<<<<< HEAD:src/modules/inventory/components/cardNormal.tsx
const colors = [
  "bg-blue-500",
  "bg-green-500",
  "bg-red-500",
  "bg-yellow-500",
  "bg-teal-500",
  "bg-violet-500",
];

export const CardNormal: React.FC<CardNormalProps> = ({
=======
export const ProductCard: React.FC<ProductCardProps> = ({
>>>>>>> c610f82ba3b0046cfa20eb7c92e72742c656e4ad:src/modules/inventory/components/ProductCard.tsx
  product,
  className,
  activeType,
}) => {
  const [isLoading, setLoading] = useState(true);
  const [isPending, setIsPending] = useState(false);
  const [open, setOpen] = useState(false);

  const imageClasses = `w-full h-full object-cover duration-700 ease-in-out ${
    isLoading ? "scale-105 blur-lg" : "scale-100 blur-0"
  }`;
  const [categorias, setCategorias] = useState<CategoriaDetail[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoriasData = await fetchCategorias();
        setCategorias(categoriasData);
      } catch (error) {
        console.error("Error fetching categorias:", error);
      }
    };

    fetchData();
  }, []);
  const CategoriaDetail = categorias.find(
    (categoria) => categoria.id === product.category
  );
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
<<<<<<< HEAD:src/modules/inventory/components/cardNormal.tsx
        <Card className={className}>
          <CardHeader className="text-start">
            <CardTitle>{product.name}</CardTitle>
            <CardDescription className="text-2xl columns-2">
              {"S/. " + product.price}
              {CategoriaDetail && (
                <Badge className={`${colors[CategoriaDetail.color]}`}>
                  {CategoriaDetail.name}
                </Badge>
              )}
=======
        <Card className={cn("rounded-[20px] overflow-hidden", className)}>
          <CardHeader className="text-start w-full">
            <CardTitle>{productState.name}</CardTitle>
            <CardDescription
              className={cn(
                "text-2xl columns-2",
                activeType === "listView" && "flex items-center gap-5"
              )}
            >
              {"S/. " + productState.price}
              <Badge className={`${categoryColors[product.category]}`}>
                {CategoriaDetail?.name}
              </Badge>
>>>>>>> c610f82ba3b0046cfa20eb7c92e72742c656e4ad:src/modules/inventory/components/ProductCard.tsx
            </CardDescription>
            {(activeType === "detailedView" || activeType === "listView") && (
              <p className="text-sm text-muted-foreground">
                {productState.description}
              </p>
            )}
          </CardHeader>
          <CardContent
            className={cn(
              "w-full",
              activeType === "detailedView" && "pt-6",
              activeType === "listView" && "p-0 w-50"
            )}
          >
            <div className="imageContainer overflow-hidden w-full h-64 rounded-sm">
              <img
                src={product.image_url}
                alt={product.name}
                onLoad={() => setLoading(false)}
                className={imageClasses}
              />
            </div>
          </CardContent>
        </Card>
      </DialogTrigger>
      <DialogContent className="max-w-6xl">
        <Card className="h-full rounded-sm border-none">
          <ProductForm
            mode="update"
            product={product}
            setIsPending={setIsPending}
            setIsOpen={setOpen}
          />
        </Card>

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
            Actualizar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
