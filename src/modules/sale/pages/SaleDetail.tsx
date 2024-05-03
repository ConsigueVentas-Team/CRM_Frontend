import React, { useEffect, useState } from 'react';
import { useParams} from 'react-router-dom';
import { useTitle } from "@/hooks/useTitle";
import api from "@/services/api";
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Sale, SaleDetailProduct, SaleDetailService } from '@/types/sale';

interface SaleDetail {
    serviceData: SaleDetailService;
    productData: SaleDetailProduct;
}


interface SaleDetailParams extends Record<string, string | undefined> {
    saleID: string;
}
const getSaleDetail = async (id: string): Promise<SaleDetail[] | null> => {
    try {
        const saleResponse = await api.get(`/sales/${id}`);
        const saleID = saleResponse.data.saleID;

        const serviceResponse = await api.get('/saledetailservice');
        const serviceData = serviceResponse.data.results.filter((item: any) => item.sale_data && item.sale_data.saleID === saleID);

        const productResponse = await api.get('/saledetailproduct');
        const productDataFromSaleObj = productResponse.data.results.filter((item: any) => item.sale_obj && item.sale_obj.saleID === saleID);
        const productDataFromSaleData = productResponse.data.results.filter((item: any) => item.sale_data && item.sale_data.saleID === saleID);

        const combinedProductData = [...productDataFromSaleObj, ...productDataFromSaleData];

        const mappedServiceData = serviceData.map((service: any) => ({
            serviceData: service,
            productData: null,
        }));

        const mappedProductData = combinedProductData.map((product: any) => ({
            serviceData: null,
            productData: product,
        }));

        return [...mappedServiceData, ...mappedProductData];
    } catch (error) {
        console.error('Error fetching sale detail:', error);
        return null;
    }
}
export function SaleDetail() {
    const [sales, setSales] = useState<SaleDetail[] | null>(null);
    const { saleID } = useParams<SaleDetailParams>();
    useTitle(`Venta #${saleID}`);

    useEffect(() => {
        getSaleDetail(saleID ?? "").then((data) => setSales(data));
    }, [saleID]);

    if (!sales) {
        return <div>Loading...</div>;
    }

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
                                    <p className="text-sm font-medium leading-none">{sale.productData.product_obj.name} {sale.productData.product_obj.brand} {sale.productData.product_obj.description}</p>
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
                <Button className="w-full">Exportar</Button>
            </CardFooter>
        </Card>
    );
}