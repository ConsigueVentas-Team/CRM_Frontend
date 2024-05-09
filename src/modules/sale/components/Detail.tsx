import { SaleDetailSkeleton } from '@/components/ui/skeleton';
import { Box, Tag } from 'lucide-react';
import { SaleDetail, SaleDetailProduct, SaleDetailService} from '@/types/sale';
import { Product } from '@/types/product';
import { Service } from '@/types/service';

interface DetailProps {
    sale: SaleDetail;
    isLoading: boolean;
    type: 'product' | 'service';
}

const Detail = ({ sale, isLoading, type }: DetailProps) => {
    if (isLoading) {
        return <SaleDetailSkeleton />;
    }

    const data = sale[`${type}Data`];
    const IconComponent = type === 'product' ? Tag : Box;

    let item: Product | Service;
    if (type === 'product') {
        item = (data as SaleDetailProduct).product;
    } else {
        item = (data as SaleDetailService).service;
    }

    if (!data) {
        return null;
    }
    
    const imageSrc = typeof item.image === 'string' ? item.image : URL.createObjectURL(item.image);

    let date: string | undefined;
    if ('sale_obj' in data) {
        date = data.sale_obj.date;
    } else if ('sale' in data) {
        date = data.sale.date;
    }
    
    return (
        <>
        <div className="flex items-center space-x-4 rounded-md border p-4 mb-2 relative">
            <div className="absolute top-4 right-4">
                <IconComponent />
            </div>
            <div className="w-32 h-32 ">
                <img src={imageSrc} alt={type} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none mr-6">{item.name} {type === 'product' ? (item as Product).brand : ''} {item.description}</p>
                <p className="text-sm text-muted-foreground">Cantidad: {data.quantity}</p>
                <p className="text-sm text-muted-foreground">Descuento: {data.discount}</p>
                <p className="text-sm text-muted-foreground">Total: {data.total_item_amount}</p>
                {date && <p className="text-sm text-muted-foreground">Fecha: {date}</p>}
            </div>
        </div>
        </>
    );
}

export default Detail;