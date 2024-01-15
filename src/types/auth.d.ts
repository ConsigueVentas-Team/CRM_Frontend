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

export interface UserDetail extends User {
  position_name: string;
  core_name: string;
  department_name: string;
}

export interface ClientDetail {
  id: number;
  nombre: string;
  apellidos: string;
  doc_id: number;
  num_identification: string;
  address: string;
  cellphone: string;
  email: string;
}

