export type Product = {
  id?: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  security_stock?: number;
  barcode?: string;
  state?: number;
  image_url: string;
  created_at?: Date;
  updated_at?: Date;
  category: number;
};
