export interface User {
  id: number;
  username: string;
  email: string;
  name: string;
  lastname: string;
  document_type: number;
  document_number: string;
  phone: string;
  address: string;
  role: number;
  is_active?:boolean;
}

export interface ClientDetail {
  id: number;
  nombre: string;
  apellidos: string;
  address: string;
  cellphone: string;
  email: string;
}

