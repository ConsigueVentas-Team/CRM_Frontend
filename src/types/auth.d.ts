export interface User {
    id: number;
    username: string;
    email: string;
    nombre: string;
    apellidos: string;
}

export interface UserDetail extends User {
    position_name: string;
    core_name: string;
    department_name: string;
}
