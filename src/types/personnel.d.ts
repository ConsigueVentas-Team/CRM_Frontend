interface Personnel {
  employees_id: number;
}
interface PersonnelDetail {
  employee_id: number;
  position: PersonnelPosition;
  name: string;
  surname: string;
  dni: string;
  id_position: number;
}
interface PersonnelPosition {
  id_position: number;
  name: string;
  department_id: number;
  cores_id: number;
}
interface FromPersonnel {
  employee_id: number;
  name: string;
  surname: string;
  dni: string;
  position: Desarollador;
  isSelect?: boolean;
}
