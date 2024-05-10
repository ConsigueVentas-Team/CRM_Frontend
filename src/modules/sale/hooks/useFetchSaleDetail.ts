import { useEffect, useState } from 'react';
import { getSale, getSaleDetailService, getSaleDetailProduct } from '../services/saleService';
import { Sale, SaleDetailProduct, SaleDetailService } from '@/types/sale';

interface SaleDetail {
    sales: Sale;
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

                if (!sale) {
                    throw new Error('Sale not found');
                }

                const saleID = sale.saleID;

                const serviceData = await getSaleDetailService();
                const filteredServiceData = serviceData.filter((item: SaleDetailService) => item.sale && item.sale.saleID === saleID);

                const productData = await getSaleDetailProduct();
                const combinedProductData = productData.filter((item: SaleDetailProduct) => 
                    (item.sale_obj && item.sale_obj.saleID === saleID)
                );


                const mappedServiceData = filteredServiceData.map((service: SaleDetailService) => ({
                    serviceData: service,
                    productData: null,
                    sales: sale
                }));

                const mappedProductData = combinedProductData.map((product: SaleDetailProduct) => ({
                    serviceData: null,
                    productData: product,
                    sales: sale
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


