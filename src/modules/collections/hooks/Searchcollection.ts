import { useEffect, useState } from 'react';
import { Sale } from '@/types/sale';
import api from '@/services/api';

export const searchCollection = () => {
  const [salesData, setSalesData] = useState<Omit<Sale, "customer" | "created_at" | "updated_at">[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/sales");
        console.log("Datos obtenidos del endpoint:", response.data.results);

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
            saleStatus
          };
        });

        setSalesData(formattedData);
      } catch (error) {
        console.error("Error fetching sales data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { salesData, loading };
};
