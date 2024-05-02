import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Outlet } from 'react-router-dom';
import { useTitle } from "@/hooks/useTitle";
import api from "@/services/api";
import { Button } from '@/components/ui/button';
import { ClientDetail } from '@/types/auth';
import { Card, CardHeader } from '@/components/ui/card';
import { Sale, SaleDetailProduct, SaleDetailService } from '@/types/sale';


interface SaleDetail {
    serviceData: SaleDetailService;
    productData: SaleDetailProduct;
}


interface SaleDetailParams extends Record<string, string | undefined> {
    saleID: string;
}

const getSaleDetail = async (id: string): Promise<SaleDetail | null> => {
    try {
        const saleResponse = await api.get(`/sales/${id}`);
        const saleID = saleResponse.data.saleID;

        const serviceResponse = await api.get('/saledetailservice');
        const serviceData = serviceResponse.data.results.find((item: any) => item.sale_data.saleID === saleID);

        const productResponse = await api.get('/saledetailproduct');
        const productData = productResponse.data.results.find((item: any) => item.sale_obj.saleID === saleID);

        return { serviceData, productData };
    } catch (error) {
        console.error('Error fetching sale detail:', error);
        return null;
    }
}

export function SaleDetail() {
    const [sale, setSale] = useState<SaleDetail | null>(null);
    const { saleID } = useParams<SaleDetailParams>();
    useTitle(`Venta #${saleID}`);

    useEffect(() => {
        getSaleDetail(saleID ?? "").then((data) => setSale(data));
    }, [saleID]);

    if (!sale) {
        return <div>Loading...</div>;
    }

   return (
    <div className="p-4">
        <Card className="mb-4">
            <CardHeader className="bg-primary text-white">
                <h1 className="text-2xl font-bold">Detalle de Venta</h1>
            </CardHeader>
            <div className="p-4">
                {sale.serviceData && (
                    <>
                       <h2 className="text-xl font-bold mb-2">Datos del Servicio</h2>
                        <p className="mb-2 text-sm text-gray-700">Venta: <span >{sale.serviceData.id }</span></p>
                        <p className="mb-2 text-sm text-gray-700">Cantidad: <span>{sale.serviceData.quantity }</span></p>
                        <p className="mb-2 text-sm text-gray-700">Precio unitario: <span>{sale.serviceData.unit_price }</span></p>
                        <p className="mb-2 text-sm text-gray-700">Descuento: <span >{sale.serviceData.discount }</span></p>
                        <p className="mb-2 text-sm text-gray-700">Impuesto: <span >{sale.serviceData.tax }</span></p>
                        <p className="mb-2 text-sm text-gray-700">Total:<span >{sale.serviceData.total_item_amount }</span></p>
                        <p className="mb-2 text-sm text-gray-700">Venta:<span >{sale.serviceData.sale }</span></p>
                        <p className="mb-2 text-sm text-gray-700">Servicio:<span >{sale.serviceData.service }</span></p>
                        {sale.serviceData.sale_data.customer ? <p className="mb-2 text-sm text-gray-700"><strong >Cliente:</strong> <span>{sale.serviceData.sale_data.customer.name}</span></p> : null}
                    </>
                )}
                {sale.productData && 
                    <>
                        <h2 className="text-xl font-bold mb-2">Datos del Producto</h2>
                        <p className="mb-2 text-sm text-gray-700"><strong>Venta #:</strong> <span >{sale.productData.id}</span></p>
                        <p className="mb-2 text-sm text-gray-700"><strong>Cantidad:</strong> <span>{sale.productData.quantity}</span></p>
                        <p className="mb-2 text-sm text-gray-700"><strong>Precio unitario:</strong> <span>{sale.productData.unit_price}</span></p>
                        <p className="mb-2 text-sm text-gray-700"><strong>Descuento:</strong> <span >{sale.productData.discount}</span></p>
                        <p className="mb-2 text-sm text-gray-700"><strong>Impuesto:</strong> <span >{sale.productData.tax}</span></p>
                        <p className="mb-2 text-sm text-gray-700"><strong>Total:</strong> <span >{sale.productData.total_item_amount}</span></p>
                        {sale.productData.sale_obj.customer && <p className="mb-2 text-sm text-gray-700"><strong >Cliente:</strong> <span>{sale.productData.sale_obj.customer.name}</span></p>}
                    </>
                }
            </div>
        </Card>
        <div className="flex justify-end">
            <Button className="w-48 bg-primary text-white">Exportar</Button>
        </div>
    </div>
);
}