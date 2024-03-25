import { Sale, ProductSaleItem, ServiceSaleItem } from "@/types/sale";



enum SaleStatus {
  COMPLETED = "COMPLETED",
 
}

enum PaymentMethod {
  CASH = "CASH",
  
}
export const sales: Sale[] = [
  {
    id: 1,
    customer_id: 1, 
    user_id: 1, 
    sale_date: "2021-08-25",
    sale_status: SaleStatus.COMPLETED, 
    payment_method: PaymentMethod.CASH, 
    total_amount: 500,
    note: "Venta de prueba",
    created_at: new Date(),
    updated_at: new Date(), 
    items: [
      {
        id: 1,
        sale_id: 1, 
        product_id: 1, 
        quantity: 2,
        unit_price: 250,
        discount: 0,
        tax: 0,
        total_item_amount: 500,
        created_at: new Date(), 
      } as ProductSaleItem,
      {
        id: 2,
        sale_id: 1, 
        product_id: 3, 
        quantity: 1,
        unit_price: 150,
        discount: 0,
        tax: 0,
        total_item_amount: 150,
        created_at: new Date(), 
      } as ProductSaleItem,
    ],
  },
  
];





/*export const sales: Sale[] = [
  {
    id: 1,
    date: "2021-08-25",
    amount: 500,
    items: [
      {
        id: 1,
        name: "Producto 1",
        quantity: 2,
        price: 250,
      },
    ],
  },
  {
    id: 2,
    date: "2021-08-25",
    amount: 600,
    items: [
      {
        id: 1,
        name: "Producto 1",
        quantity: 2,
        price: 250,
      },
    ],
  },
  {
    id: 3,
    date: "2021-08-25",
    amount: 700,
    items: [
      {
        id: 1,
        name: "Producto 1",
        quantity: 2,
        price: 250,
      },
    ],
  },
  {
    id: 4,
    date: "2021-08-25",
    amount: 800,
    items: [
      {
        id: 1,
        name: "Producto 1",
        quantity: 2,
        price: 250,
      },
    ],
  },
  {
    id: 5,
    date: "2021-08-25",
    amount: 500,
    items: [
      {
        id: 1,
        name: "Producto 1",
        quantity: 2,
        price: 250,
      },
    ],
  },
  {
    id: 6,
    date: "2021-08-25",
    amount: 500,
    items: [
      {
        id: 1,
        name: "Producto 1",
        quantity: 2,
        price: 250,
      },
    ],
  },
  {
    id: 7,
    date: "2021-08-25",
    amount: 500,
    items: [
      {
        id: 1,
        name: "Producto 1",
        quantity: 2,
        price: 250,
      },
    ],
  },
  {
    id: 8,
    date: "2021-08-25",
    amount: 500,
    items: [
      {
        id: 1,
        name: "Producto 1",
        quantity: 2,
        price: 250,
      },
    ],
  },
];*/
