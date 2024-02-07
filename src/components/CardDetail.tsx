import { Product } from "@/types/product";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { ProductForm } from "@/modules/inventory/components/ProductForm";
import { ScrollArea } from "./ui/scroll-area";

interface CardDetailProps {
  product: Product;
  className?: string;
}
const CardDetail: React.FC<CardDetailProps> = ({ product }) => {
  const [isLoading, setLoading] = useState(true);
  const imageClasses = `w-full h-full object-cover duration-700 ease-in-out ${
    isLoading ? "scale-105 blur-lg" : "scale-100 blur-0"
  }`;
  const [isPending, setIsPending] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex">
      <div className="w-1/2 ">
        <div className="imageContainer overflow-hidden rounded-sm">
          <img
            src={product.image_url}
            alt={product.name}
            onLoad={() => setLoading(false)}
            className={imageClasses}
          />
        </div>
      </div>
      <div className="w-1/2 p-4 ">
        <ScrollArea type="always" style={{ height: 550 }}>
          <Card className="h-full  rounded-sm">
            <ProductForm
              mode="update"
              setIsPending={setIsPending}
              product={product}
              setIsOpen={setIsOpen}
            />
          </Card>
        </ScrollArea>
      </div>
    </div>
  );
};

export default CardDetail;
