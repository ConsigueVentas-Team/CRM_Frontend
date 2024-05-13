import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTitle } from "@/hooks/useTitle";
import { useFetchSaleDetail } from "../hooks/useFetchSaleDetail";
import { useFetchCustomerDetail } from "../hooks/useFetchCustomerDetail";
import CustomerDetail from '../components/CustomerDetail';
import { Button } from '@/components/ui/button';
import Detail from '../components/Detail';
import { SaleDetail as SaleDetailType } from '@/types/sale'; 
import { ChevronLeft } from 'lucide-react';


interface SaleDetailParams extends Record<string, string | undefined> {
    saleID: string;
}

export function SaleDetail() {
    const { saleID } = useParams<SaleDetailParams>();
    const navigate = useNavigate();
    useTitle(`Venta #${saleID}`);
    const { sales, isLoading } = useFetchSaleDetail(saleID ?? "");
    const { customer, isLoading: isCustomerLoading } = useFetchCustomerDetail(saleID ?? "");

    const handleExportPDF = () => {
        // Abrir una nueva pestaña con el componente PDFSaleDetail
        window.open(`/PDFSaleDetail/${saleID}`, "_blank");
    };

    return (
        <>
           <h3 className="text-3xl font-bold mb-8">Detalle de venta</h3>
            <div className="flex flex-col-reverse lg:flex-row justify-between items-start mb-6">
                <div className="order-2 lg:order-1 w-full lg:w-1/3 mb-4 lg:mb-0">
                    <CustomerDetail customer={customer} isLoading={isCustomerLoading} />
                </div>
                <div className="order-1 lg:order-2 flex justify-between lg:justify-end">
                    <Button variant="outline" className="w-48 mr-2 mb-2 lg:mb-0" onClick={() => navigate(-1)}><ChevronLeft className="h-4 w-4" /><span className='mr-2'>Volver</span></Button>
                    <Button onClick={handleExportPDF} className="w-48">Exportar</Button>
                </div>
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