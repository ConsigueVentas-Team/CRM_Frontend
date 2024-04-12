import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sale, ProductSaleItem, ServiceSaleItem } from "@/types/sale";

interface ItemCardProps {
    sale: Sale;
    saleItems: (ProductSaleItem | ServiceSaleItem)[];
}

export function ItemCard({ sale, saleItems }: ItemCardProps) {
    return (
        <Card>
            <CardHeader>
                <h1 className="text-center">Detalle de Venta</h1>
            </CardHeader>
            <CardContent>
                <CardTitle>Venta #{sale.id}</CardTitle>
                <CardDescription>Fecha: {sale.sale_date}</CardDescription>
                <div className="flex justify-between mb-2">
                    <h2>Items:</h2>
                </div>
                {saleItems.map((saleItem, index) => (
                    <div key={index}>
                        {saleItem.type === 'product' ? (
                            <div>
                                <p>Nombre del Producto: {saleItem.id}</p>
                                <p>Precio: ${saleItem.unit_price}</p>
                            </div>
                        ) : (
                            <div>
                                <p>Nombre del Servicio: {saleItem.id}</p>
                                <p>Precio: ${saleItem.unit_price}</p>
                            </div>
                        )}
                        <div>
                            <p>Cantidad: {saleItem.quantity}</p>
                        </div>
                    </div>
                ))}
                
                <div className="mt-5">
                <hr/>
                    <p>Total: ${sale.total_amount}</p>
                </div>
                <div className="text-xs">
                    <p>*Nota: {sale.note}</p>
                </div>
            </CardContent>
        </Card>
    );
}
