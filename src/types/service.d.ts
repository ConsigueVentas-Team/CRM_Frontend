
 export type Service = {
    id: number;
    name: string;
    description: string;
    service_time: string; 
    maintenance: boolean;
    rate: number;
    image: string;
    promotion_id: number | null; 
    created_at?: Date; 
    updated_at?: Date; 
  };
  
  export type Promotion = {
    id: number;
    name: string;
    description: string;
    discount: number;
    start_date: string; 
    ending_date: string; 
    created_at?: Date; 
    updated_at?: Date; 
  };