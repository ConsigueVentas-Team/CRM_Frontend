import { Payment } from "@/types/purchase";
import { useEffect, useState } from "react";
import { PaymentDataTable } from "../components/purchases/PaymentDataTable";

export function Payments() {

  const mockData: Payment[] = [
    { id: 1, purchase_id: 101, date_payment: new Date('2023-06-01'), date_limit: new Date('2023-06-10'), payment_method: 'Credit Card', total: 100, cancelled_total: 0, status: 'Completado' },
    { id: 2, purchase_id: 102, date_payment: new Date('2023-06-02'), date_limit: new Date('2023-06-12'), payment_method: 'Paypal', total: 200, cancelled_total: 0, status: 'Pendiente' },
    { id: 3, purchase_id: 103, date_payment: new Date('2023-06-03'), date_limit: new Date('2023-06-13'), payment_method: 'Bank Transfer', total: 300, cancelled_total: 0, status: 'Completado' },
    { id: 4, purchase_id: 104, date_payment: new Date('2023-06-04'), date_limit: new Date('2023-06-14'), payment_method: 'Credit Card', total: 400, cancelled_total: 0, status: 'Fallado' },
    { id: 5, purchase_id: 105, date_payment: new Date('2023-06-05'), date_limit: new Date('2023-06-15'), payment_method: 'Paypal', total: 500, cancelled_total: 0, status: 'Completado' },
    { id: 6, purchase_id: 103, date_payment: new Date('2023-06-03'), date_limit: new Date('2023-06-13'), payment_method: 'Bank Transfer', total: 300, cancelled_total: 0, status: 'Completado' },
    { id: 7, purchase_id: 104, date_payment: new Date('2023-06-04'), date_limit: new Date('2023-06-14'), payment_method: 'Credit Card', total: 400, cancelled_total: 0, status: 'Fallado' },
    { id: 8, purchase_id: 104, date_payment: new Date('2023-06-04'), date_limit: new Date('2023-06-14'), payment_method: 'Paypal', total: 400, cancelled_total: 0, status: 'Pendiente' },
    { id: 9, purchase_id: 104, date_payment: new Date('2023-06-04'), date_limit: new Date('2023-06-14'), payment_method: 'Bank Transfer', total: 400, cancelled_total: 0, status: 'Fallado' },
    { id: 10, purchase_id: 101, date_payment: new Date('2023-06-01'), date_limit: new Date('2023-06-10'), payment_method: 'Credit Card', total: 100, cancelled_total: 0, status: 'Completado' },
    { id: 11, purchase_id: 101, date_payment: new Date('2023-06-01'), date_limit: new Date('2023-06-10'), payment_method: 'Credit Card', total: 100, cancelled_total: 0, status: 'Completado' },
    { id: 12, purchase_id: 101, date_payment: new Date('2023-06-01'), date_limit: new Date('2023-06-10'), payment_method: 'Credit Card', total: 100, cancelled_total: 0, status: 'Completado' },
    { id: 13, purchase_id: 101, date_payment: new Date('2023-06-01'), date_limit: new Date('2023-06-10'), payment_method: 'Credit Card', total: 100, cancelled_total: 0, status: 'Completado' },
    { id: 14, purchase_id: 101, date_payment: new Date('2023-06-01'), date_limit: new Date('2023-06-10'), payment_method: 'Credit Card', total: 100, cancelled_total: 0, status: 'Completado' },
    { id: 15, purchase_id: 101, date_payment: new Date('2023-06-01'), date_limit: new Date('2023-06-10'), payment_method: 'Credit Card', total: 100, cancelled_total: 0, status: 'Completado' },
    { id: 16, purchase_id: 101, date_payment: new Date('2023-06-01'), date_limit: new Date('2023-06-10'), payment_method: 'Credit Card', total: 100, cancelled_total: 0, status: 'Completado' }
  ];

  const [payments, setPayments] = useState<Payment[]>([]);

  useEffect(() => {
    setPayments(mockData);
  }, []);


  return (
    <div>
       <h1 className="text-3xl font-extrabold mb-1 mt-3">Pagos</h1>
       <p className='text-sm text-muted-foreground mb-1'>Supervisa y administra todos tus pagos de manera eficiente.</p>
      <PaymentDataTable data={payments} isLoading={false} />
    </div>
  );
}