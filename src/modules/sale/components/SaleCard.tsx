import { Card, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {Sale} from '@/types/sale';
import { ChevronRight, CalendarDays } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import { formatDate } from "@/lib/utils";

interface SaleCardProps {
  sale: Sale;
}

export function SaleCard({ sale}: SaleCardProps) {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/sales/${sale.saleID}`);
  };

  const formattedDate = formatDate(sale.date);
  
  return (
    <Card className={cn("flex rounded-xl overflow-hidden group hover:shadow-2xl bg-background relative")}>
      <button 
        className="bg-primary text-white p-6 flex items-center justify-start"
        onClick={handleClick}>
        <span className="mr-2">Ver detalle</span>
        <ChevronRight className="transition-transform transform group-hover:translate-x-4" />
      </button>
      <div className="bg-background rounded-tr-lg rounded-br-lg shadow-lg p-6 flex-grow relative">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className="text-xl font-bold">
              Nombre del {sale.saleID}
            </h3>
            <p className="text-base">{sale.customer.name} {sale.customer.lastname}</p>
          </div>
          <div>
            <span className="text-green-500 text-2xl font-bold">S/ {sale.total}</span>
          </div>
        </div>
        <div className="-bottom-2 left-4 flex items-center space-x-2 mt-12 text-gray-400">
          <CalendarDays/>
          <p className="text-base">{formattedDate}</p>
        </div>
      </div>
    </Card>
  );
}