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
  is_active?: boolean;
  image: File[];
}

export interface UserDetail extends User {
  position_name: string;
  core_name: string;
  department_name: string;
}
export interface ClientData {
  count: number;
  next: string | null;
  previous: string | null;
  results: ClientDetail[];
}
export interface ClientDetail {
  clientID: number;
  name: string;
  lastname: string;
  documentType: number;
  documentNumber: string;
  email: string;
  cellNumber: string;
  address: string;
  created_at: string;
  state: boolean;
}

export interface CategoriaDetail {
  [x: string]: any;
  products_related: number;
  id: number;
  name: string;
  color: number;
  description: string;
}
