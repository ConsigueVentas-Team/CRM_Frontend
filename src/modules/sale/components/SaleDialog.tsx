import { ChevronRight } from "lucide-react";
import React, { useState } from "react";
import { Sale} from "@/types/sale";
import { ItemCard } from "./ItemCard";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface SaleCardProps {
  sale: Sale;
  saleType: string;
}

export const SaleDialog: React.FC<SaleCardProps> = ({
  sale,
  saleType,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="bg-primary text-white p-6 flex items-center justify-end">
          <span className="mr-2">Ver detalles</span>
          <ChevronRight className="transition-transform transform group-hover:translate-x-4" />
        </button>
      </DialogTrigger>
      <DialogContent>
        <ItemCard sale={sale} saleItems={sale.items}  />
      </DialogContent>
    </Dialog>
  );
};

 