import { Skeleton } from "@/components/ui/skeleton";
import { SaleCard } from "./SaleCard";
import { MegaphoneOff } from "lucide-react";
import {Sale} from '@/types/sale';
import { DateRange } from 'react-day-picker';

interface SalesListProps {
  sales: Sale[];
  isLoading: boolean;
  dateRange?: DateRange;
}

export function SalesList({ sales,isLoading, dateRange}: SalesListProps) {
  const filteredSales = sales.filter(sale => {
    if (!dateRange) {
      return true;
    }

    const saleDate = new Date(sale.sale_date);
    const { from, to } = dateRange;

    return saleDate >= (from ?? new Date(0)) && (!to || saleDate <= to);
  });

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
      {filteredSales && filteredSales.length > 0 ? (
        filteredSales.map(sale => (
          <SaleCard key={sale.id} sale={sale} />
        ))
      ) : (
        <div className="w-full flex flex-col gap-4 items-center justify-center mt-24">
          <MegaphoneOff size={20} className="w-32 h-32 stroke-muted " />
          <span className="text-lg">
            No hay ventas de disponibles en este momento.
          </span>
        </div>
      )}
    </div>
  );
}