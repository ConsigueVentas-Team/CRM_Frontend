export interface User {
  id: number;
  username: string;
  email: string;
  nombre: string;
  apellidos: string;
  doc_id: number;
  num_identification: string;
  cellphone: string;
  address: string;
  type_id: number;
}

export interface ClientDetail {
  id: number;
  nombre: string;
  apellidos: string;
  address: string;
  cellphone: string;
  email: string;
}

