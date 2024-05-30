export type Purchase = {
    id?: number;
    product: string;
    quantity: number;
    price: number;
    total: number;
    created_at?: Date;
    updated_at?: Date;
};