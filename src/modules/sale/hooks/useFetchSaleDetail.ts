import { useEffect, useState } from 'react';
import { getSale, getSaleDetailService, getSaleDetailProduct } from '../services/saleService';
import { SaleDetail, SaleDetailProduct, SaleDetailService } from '@/types/sale';


export const useFetchSaleDetail = (id: string) => {
    const [sales, setSales] = useState<SaleDetail[] | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchSaleDetail = async () => {
            setIsLoading(true);
            try {
                const [sale, serviceData, productData] = await Promise.all([
                    getSale(id),
                    getSaleDetailService(),
                    getSaleDetailProduct(),
                ]);

                const saleID = sale.saleID;

                const filteredServiceData = serviceData.filter((item: SaleDetailService) => item.sale && item.sale.saleID === saleID);
                const combinedProductData = productData.filter((item: SaleDetailProduct) => 
                    (item.sale_obj && item.sale_obj.saleID === saleID)
                );

                const mappedServiceData = filteredServiceData.map((service: SaleDetailService) => ({
                    serviceData: service,
                    productData: null,
                }));

                const mappedProductData = combinedProductData.map((product: SaleDetailProduct) => ({
                    serviceData: null,
                    productData: product,
                }));

                setSales([...mappedServiceData, ...mappedProductData]);
            } catch (error) {
                setError(error as Error);
                console.error('Error fetching sale detail:', error);
            } finally {
                setIsLoading(false);
            }
        }

        fetchSaleDetail();
    }, [id]);

    return { sales, isLoading, error };
}