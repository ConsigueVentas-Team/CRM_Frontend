import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Product } from "@/types/product";
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

import { categoryColors, cn } from "@/lib/utils";
import { CategoriaDetail } from "@/types/auth";

import api from "@/services/api";
import { ProductCard } from "./ProductCard";

interface ProductCardProps {
  product: Product;
  className?: string;
  activeType?: string;
}

const fetchCategorias = async () => {
  try {
    const response = await api.get("/categories");
    return response.data;
  } catch (error) {
    console.error("Error fetching categorias:", error);
    throw error;
  }
};

export const ProductDialog: React.FC<ProductCardProps> = ({
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
        <ProductCard
          product={product}
          activeType={activeType}
          setLoading={setLoading}
          className={className}
          CategoriaDetail={CategoriaDetail}
          imageClasses={imageClasses}
        />
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
