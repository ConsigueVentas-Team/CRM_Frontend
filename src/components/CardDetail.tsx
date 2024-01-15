import { Producto } from "@/types/Producto";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { ProductForm } from "@/modules/inventory/components/ProductForm";
import { ScrollArea } from "./ui/scroll-area";

interface CardDetailProps {
  product: Producto;
  className?: string;
}
const CardDetail: React.FC<CardDetailProps> = ({ product }) => {
  const [isLoading, setLoading] = useState(true);
  const imageClasses = `w-full h-full object-cover duration-700 ease-in-out ${
    isLoading ? "scale-105 blur-lg" : "scale-100 blur-0"
  }`;
  const [isPending, setIsPending] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [productA, setProduct] = useState(product);
  return (
    <div className="flex">
      <div className="w-1/2 ">
        <div className="imageContainer overflow-hidden rounded-sm">
          <img
            src={product.imagen}
            alt={product.nombre}
            onLoad={() => setLoading(false)}
            className={imageClasses}
          />
        </div>
      </div>
      <div className="w-1/2 p-4 ">
        <ScrollArea type="always" style={{ height: 550 }}>
          <Card className="h-full  rounded-sm">
            <ProductForm
              setIsPending={setIsPending}
              setProducts={setProduct}
              setIsOpen={setIsOpen}
            />
          </Card>
        </ScrollArea>
      </div>
    </div>
  );
};

export default CardDetail;
