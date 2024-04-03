export type Promotion = {
  id?: number;
  name: string;
  description: string;
  discount: number;
  start_date: string; 
  ending_date: string; 
  created_at?: Date; 
  updated_at?: Date; 
};
