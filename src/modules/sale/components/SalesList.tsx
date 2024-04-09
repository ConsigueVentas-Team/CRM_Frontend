import { Skeleton } from "@/components/ui/skeleton";
import { SaleCard } from "./SaleCard";
import { MegaphoneOff } from "lucide-react";
import {Sale} from '@/types/sale';

interface SalesListProps {
  sales: Sale[];
  saleType: string;
  isLoading: boolean;
}

export function SalesList({ sales, saleType,isLoading }: SalesListProps) {
  if (isLoading) {
    return (
      <div className="flex flex-col gap-8 mb-20">
        {Array.from({ length: 10 }).map((_, index) => (
          <Skeleton key={index} className="w-full h-44" />
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8 mb-20">
      {sales && sales.length > 0 ? (
        sales.map((sale) => (
          <SaleCard key={sale.id} sale={sale} saleType={sale.items[0]?.type}/>
        ))
      ) : (
        <div className="w-full flex flex-col gap-4 items-center justify-center mt-24">
          <MegaphoneOff size={20} className="w-32 h-32 stroke-muted " />
          <span className="text-lg">
            No hay ventas de {saleType} disponibles en este momento.
          </span>
        </div>
      )}
    </div>
  );
}
