import React from 'react';
import { useParams } from 'react-router-dom';
import { useTitle } from "@/hooks/useTitle";
import { useFetchSaleDetail } from "../hooks/useFetchSaleDetail";
import { Button } from '@/components/ui/button';
import Detail from '../components/Detail';
import { SaleDetail as SaleDetailType } from '@/types/sale'; 

interface SaleDetailParams extends Record<string, string | undefined> {
    saleID: string;
}

export function SaleDetail() {
    const { saleID } = useParams<SaleDetailParams>();
    useTitle(`Venta #${saleID}`);
    const { sales, isLoading } = useFetchSaleDetail(saleID ?? "");

    return (
        <>
            <h3 className="text-3xl font-bold mb-8">Detalle de venta</h3>
            <div className="flex justify-end mb-6">
                <Button className="mt-4 w-48">Exportar</Button>
            </div>
            {sales && sales.map((sale: SaleDetailType, index: number) => ( 
                <React.Fragment key={index}>
                    {sale.serviceData && <Detail sale={sale} isLoading={isLoading} type="service" />}
                    {sale.productData && <Detail sale={sale} isLoading={isLoading} type="product" />}
                </React.Fragment>
            ))}
        </>
    );
}