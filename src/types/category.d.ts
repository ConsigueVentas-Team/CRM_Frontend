import { Product } from "./product";
import { Service } from "./service";

export type Category = {
    id: number;
    name: string;
    description: string;
    color: string; 
    type_category: TypeCategory;  
    created_at: Date;   
    updated_at: Date;  
  };

  export type TypeCategory = Product | Service;