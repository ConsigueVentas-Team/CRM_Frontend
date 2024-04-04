export type Product = {
  id?: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  stock_security?: number;
  barcode?: string;
  status?: number;
  created_at?: Date;
  updated_at?: Date;
  category: number;
  image: File | string;
  brand: string;
  rating:string;

};
