import React from 'react';
import { useParams } from 'react-router-dom';
import { useTitle } from "@/hooks/useTitle";
import { useFetchSaleDetail } from "../hooks/useFetchSaleDetail";
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';


interface SaleDetailParams extends Record<string, string | undefined> {
    saleID: string;
}

export function SaleDetail() {
    const { saleID } = useParams<SaleDetailParams>();
    useTitle(`Venta #${saleID}`);
    const sales = useFetchSaleDetail(saleID ?? "");

    if (!sales) {
        return <div>Loading...</div>;
    }

    const handleExportPDF = () => {
        // Abrir una nueva pestaña con el componente PDFSaleDetail
        window.open(`/PDFSaleDetail/${saleID}`, "_blank");
    };

    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle>Detalle de Venta</CardTitle>
                <CardDescription>Resumen de la venta</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                {sales.map((sale, index) => (
                    <React.Fragment key={index}>
                        {sale.serviceData && (
                            <div className="flex items-center space-x-4 rounded-md border p-4">
                                <div className="w-32 h-32 bg-gray-600"> 
                                </div>
                                <div className="flex-1 space-y-1">
                                    <p className="text-sm font-medium leading-none">Lorem deserunt mollit enim reprehenderit dolor esse.</p>
                                    <p className="text-sm text-muted-foreground">Cantidad: {sale.serviceData.quantity}</p>
                                    <p className="text-sm text-muted-foreground">Descuento: {sale.serviceData.discount}</p>
                                    <p className="text-sm text-muted-foreground">Total: {sale.serviceData.total_item_amount}</p>
                                    <p className="text-sm text-muted-foreground">Fecha: {sale.serviceData.created_at}</p>
                                </div>
                            </div>
                        )}
                        {sale.productData && (
                            <div className="flex items-center space-x-4 rounded-md border p-4">
                                <div className="w-32 h-32 bg-gray-600">
                                </div>
                                <div className="flex-1 space-y-1">
                                    <p className="text-sm font-medium leading-none">Productos</p>
                                    <p className="text-sm font-medium leading-none">{sale.productData.product.name} {sale.productData.product.brand} {sale.productData.product.description}</p>
                                    <p className="text-sm text-muted-foreground">Cantidad: {sale.productData.quantity}</p>
                                    <p className="text-sm text-muted-foreground">Descuento: {sale.productData.discount}</p>
                                    <p className="text-sm text-muted-foreground">Total: {sale.productData.total_item_amount}</p>
                                    <p className="text-sm text-muted-foreground">Fecha: {sale.productData.created_at}</p>
                                </div>
                            </div>
                        )}
                    </React.Fragment>
                ))}
            </CardContent>
            <CardFooter>
                <Button onClick={handleExportPDF} className="w-1/6">Exportar</Button>
            </CardFooter>
        </Card>
    );
}