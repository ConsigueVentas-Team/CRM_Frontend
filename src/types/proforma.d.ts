interface Proforma {
  invoice_number: string;
  date: string;
  reference: string;
  prepared_by: string;
  required_by: string;
  approved_by: string;
  email: string;
  phone_number: string;
  work_time: string;
  company: number;
  type: string;
  observations: Observations[];
  package: Package[];
  personal_proyecto: Personnel[];
}

interface ProformaTable {
  id: number;
  numero_proforma: string;
  referencia: string;
  fecha: string;
  total: number;
  empresa: string;
}

interface Company {
  company_id: number;
  business_name: string;
  tax_id: string;
  phone_number: string;
  email: string;
  website: string;
  office_address: string;
  portfolio: string;
}

interface Observations {
  descripcion: string;
}

interface Package {
  name: string;
  price: number;
  note_price: string;
  package_items: PackageItems[];
}

interface PackageItems {
  value: string;
  item_id: number;
}

interface Personnel {
  employee_id: number;
  isselect:boolean;
}
interface FromPersonnel{
  employee_id: number;
  name: string;
  surname: string;
  dni: string;
  position: Desarollador
}
interface Desarollador{
  id: number;
  name:string
}

