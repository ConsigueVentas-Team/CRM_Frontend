import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sale, ProductSaleItem, ServiceSaleItem } from "@/types/sale";

interface ItemCardProps {
    sale: Sale;
    saleItem: ProductSaleItem | ServiceSaleItem;
}

export function ItemCard({ sale, saleItem }: ItemCardProps) {
    return (
        <Card>
            <CardHeader>
                <h1>Detalles de Venta</h1>
            </CardHeader>
            <CardContent>
                <CardTitle>Venta #{sale.id}</CardTitle>
                <CardDescription>Fecha: {sale.sale_date}</CardDescription>
                <div className="flex justify-between mb-2">
                    <h2>Detalle del ítem:</h2>
                </div>
                <div>
                    <p>Nombre: {saleItem.sale_id}</p>
                </div>
                <div>
                    <p>Precio: ${saleItem.unit_price}</p>
                </div>
                <div>
                    <p>Cantidad: {saleItem.quantity}</p>
                </div>
                <div>
                    <p>Total: ${sale.total_amount}</p>
                </div>
                <div>
                    <p>Nota: {sale.note}</p>
                </div>
            </CardContent>
        </Card>
    );
}

