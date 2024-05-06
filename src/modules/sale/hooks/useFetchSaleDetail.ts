import { useEffect, useState } from 'react';
import { getSale, getSaleDetailService, getSaleDetailProduct } from '../services/saleService';
import { Sale, SaleDetailProduct, SaleDetailService } from '@/types/sale';
import api from '@/services/api';

interface SaleDetail {
    sales: Sale[];
    serviceData: SaleDetailService | null;
    productData: SaleDetailProduct | null;
}

/*Esta función busca los productos y servicios por ID del Sale*/
export const useFetchSaleDetail = (id: string) => {
    const [sales, setSales] = useState<SaleDetail[] | null>(null);

    useEffect(() => {
        const fetchSaleDetail = async () => {
            try {
                const sale = await getSale(id);
                const saleID = sale.saleID;

                const serviceData = await getSaleDetailService();
                const filteredServiceData = serviceData.filter((item: any) => item.sale_data && item.sale_data.saleID === saleID);

                const productData = await getSaleDetailProduct();
                const combinedProductData = productData.filter((item: any) => 
                    (item.sale_obj && item.sale_obj.saleID === saleID) || 
                    (item.sale_data && item.sale_data.saleID === saleID)
                );

                const mappedServiceData = filteredServiceData.map((service: any) => ({
                    serviceData: service,
                    productData: null,
                }));

                const mappedProductData = combinedProductData.map((product: any) => ({
                    serviceData: null,
                    productData: product,
                }));

                setSales([...mappedServiceData, ...mappedProductData]);
            } catch (error) {
                console.error('Error fetching sale detail:', error);
            }
        }

        fetchSaleDetail();
    }, [id]);

    return sales;
}


