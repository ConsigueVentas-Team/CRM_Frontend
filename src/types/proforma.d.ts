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

interface Empresa {
  empresa_id: number;
  razon_social: string;
  ruc: string;
  cell: string;
  email: string;
  web: string;
  oficina: string;
  portafolio: string;
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
}

