import { useEffect, useState } from 'react';
import { Sale } from '@/types/sale';
import api from '@/services/api';

export const searchCollection = () => {
  const [salesData, setSalesData] = useState<Omit<Sale, "customer" | "created_at" | "updated_at">[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = async (pageUrl: string) => {
    const response = await api.get(pageUrl);

    // console.log(`Datos obtenidos del endpoint ${pageUrl}:`, response.data.results);

    // Mapea los resultados para obtener solo los campos específicos que necesitas
    const formattedData = response.data.results.map((sale: Sale) => {
      const { saleID, date, total, paymentType, saleStatus } = sale;
      const { name, lastname, email, phone } = sale.customer;

      return {
        saleID,
        name,
        lastname,
        email,
        phone,
        date,
        total,
        paymentType,
        saleStatus,
      };
    });

    return formattedData;
  };

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        setLoading(true);
        const initialData = await fetchData("/sales");
        const additionalData = await fetchData("/sales?page=2");

        // Combina los datos de ambas páginas
        setSalesData([...initialData, ...additionalData]);
      } catch (error) {
        console.error("Error fetching sales data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, []);

  return { salesData, loading };
};
