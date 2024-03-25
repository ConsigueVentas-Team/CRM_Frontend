export type Sale = {
    id: number;
    customer_id: number;
    user_id: number;
    sale_date: string;
    sale_status: SaleStatus;
    payment_method: PaymentMethod;
    total_amount: number;
    note?: string;
    created_at: Date; 
    updated_at: Date; 
    items: (ProductSaleItem | ServiceSaleItem)[]; 
}

export enum SaleStatus {
    COMPLETED = "COMPLETED",
    
  }
  
export enum PaymentMethod {
    CASH = "CASH",
   
  }

export type ProductSaleItem = {
    id: number;
    sale_id: number;
    product_id: number;
    quantity: number;
    unit_price: number;
    discount: number;
    tax: number;
    total_item_amount: number;
    created_at: Date; 
}

export type ServiceSaleItem = {
    id: number;
    sale_id: number;
    service_id: number;
    quantity: number;
    unit_price: number;
    discount: number;
    tax: number;
    total_item_amount: number;
    created_at: Date; 
}



/*export type Sale = {
    id: number;
    date: string;
    amount: number;
    items: SaleItem[];
}

export type SaleItem = {
    id: number;
    name: string;
    quantity: number;
    price: number;
}*/
