import { ClientDetail } from "./auth";

export interface Sale{
    items: any;
    saleID: number;
    date: string;
    total: string;
    paymentType: number;
    customer: ClientDetail;
    created_at: string;
    updated_at: string;
}


export interface SaleDetailProduct {
    id: number;
    quantity: number;
    unit_price: number;
    discount: number;
    tax: number;
    total_item_amount: number;
    created_at: string;
    sale_obj: Sale;
    product: number;
}

export interface SaleDetailService {
    id: number;
    quantity: number;
    unit_price: number;
    discount: number;
    tax: number;
    total_item_amount: number;
    created_at: string;
    sale: number;
    service: number;
    sale_data: Sale[];
}