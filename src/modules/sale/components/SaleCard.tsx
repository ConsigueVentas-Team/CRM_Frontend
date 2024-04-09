import { Card, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ProgressDemo } from './ProgressDemo';
import {Sale} from '@/types/sale';
import { SaleDialog } from "./SaleDialog";

interface SaleCardProps {
  sale: Sale;
  saleType: string;
}

export function SaleCard({ sale, saleType }: SaleCardProps) {
  return (
    <Card className={cn("flex rounded-xl overflow-hidden group hover:shadow-2xl bg-background ", saleType)}>
      <div className="bg-background rounded-tr-lg rounded-br-lg shadow-lg p-6 flex-grow">
        <div className="flex justify-between items-center mb-4">
          <div>
          <h3 className="text-xl font-bold">
            Nombre del {sale.items[0]?.type === 'product' ? 'producto' : 'servicio'} {sale.id}
          </h3>
            <p className="text-gray-500">{sale.sale_date}</p>
          </div>
          <div>
            <span className="text-green-500 text-2xl font-bold">S/ {sale.total_amount}</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-500">Cliente:</p>
            <p className="font-bold">Jhon Doe</p>
          </div>
          <div>
            <p className="text-gray-500">Vendedor:</p>
            <p className="font-bold">Unknown</p>
          </div>
        </div>
        {sale.items[0]?.type === 'service' && <ProgressDemo />}{
        }
      </div>
      <div className="flex justify-end">
        <SaleDialog sale={sale} saleType={saleType}/>
      </div>
    </Card>
  );
}
