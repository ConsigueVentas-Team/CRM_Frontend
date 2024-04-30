import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Outlet } from 'react-router-dom';
import { useTitle } from "@/hooks/useTitle";
import api from "@/services/api";
import { Button } from '@/components/ui/button';
import { ClientDetail } from '@/types/auth';

interface Sale {
    saleID: number;
    date: string;
    total: string;
    paymentType: number;
    customer: ClientDetail;
}

interface SaleDetailParams extends Record<string, string | undefined> {
    saleID: string;
}

const getSaleDetail = async (id: string) => {
    try {
        const response = await api.get(`/sales/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching sale detail:', error);
    }
}

export function SaleDetail() {
    const [sale, setSale] = useState<Sale | null>(null);
    const { saleID } = useParams<SaleDetailParams>();
    useTitle(`Venta #${saleID}`);

    useEffect(() => {
        getSaleDetail(saleID ?? "").then((data) => setSale(data));
    }, [saleID]);

    if (!sale) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div className="2xl:flex justify-between mb-8 gap-4">
        <div className="flex flex-col 2xl:flex-row gap-5">
          <Button className="w-48">Exportar</Button>
        </div>
      </div>
      
            <h1>Detalle de Venta</h1>
            <div>
                <p>Venta #{sale.saleID}</p>
                <p>Fecha: {sale.date}</p>
                <p>Total: {sale.total}</p>
                <p>Tipo de Pago: {sale.paymentType}</p>
                <p>Cliente: {sale.customer.name}</p>
            </div>
        </div>
    );
}