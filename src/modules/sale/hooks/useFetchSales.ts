import { useEffect, useState } from 'react';
import { Sale, SaleDetailProduct, SaleDetailService } from '@/types/sale';
import api from '@/services/api';

interface SaleDetail {
    sales: Sale[];
    serviceData: SaleDetailService | null;
    productData: SaleDetailProduct | null;
}

/*Esto muestra todas las ventas y toddos sus productos y servicios*/
export const useFetchSales = (url = "/sales") => {

    const [salesData, setSalesData] = useState<SaleDetail | null>(null); // Inicializar como null

    /*Aquí hacemos las peticiones de las ventas, los productos y servicios*/
      useEffect(() => {
        const fetchData = async () => { 
          try {
            const { data } = await api.get(url);
            const NextPageresponseSale = await api.get(data.next);
            const productDetailsResponse = await api.get("/saledetailproduct");
            const serviceDetailsResponse = await api.get("/saledetailservice");
            setSalesData({
              sales: [...data.results, ...NextPageresponseSale.data.results],
              productData: productDetailsResponse.data.results,
              serviceData: serviceDetailsResponse.data.results
            });

            if(data.next){
              useFetchSales(NextPageresponseSale.data.next);
            }
            
          } catch (error) {
            console.error("Error fetching data:", error);
          }

        };
    
        fetchData();
      }, []); // Solo se ejecuta una vez al montar el componente

      return salesData;

}
