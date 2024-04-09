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
    PENDING = "PENDING",
    INPROGRESS = "IN PROGRESS",
    
  }
  
export enum PaymentMethod {
    CASH = "CASH",
    CARD = "CARD",
    OTHER = "OTHER", 
   
  }

export interface ProductSaleItem {
    type: 'product';
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

export interface ServiceSaleItem {
    type: 'service';
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