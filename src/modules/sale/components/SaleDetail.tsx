import React from 'react';

interface Sale {
    saleID: number;
    date: string;
    total: string;
    paymentType: number;
    customer: number;
}

interface SaleDetailProps {
    sale: Sale;
}

const SaleDetail: React.FC<SaleDetailProps> = ({ sale }) => {
    return (
        <div>
            <h1>Detalle de Venta</h1>
            <p>Venta #{sale.saleID}</p>
            <p>Fecha: {sale.date}</p>
            <p>Total: {sale.total}</p>
            <p>Tipo de Pago: {sale.paymentType}</p>
            <p>Cliente: {sale.customer}</p>
        </div>
    );
};

export default SaleDetail;