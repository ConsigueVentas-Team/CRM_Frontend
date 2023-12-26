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

interface ProformaDataTable {
  proforma_id: number;
  date: string;
  company: {
    company_id: number;
    business_name: string;
    tax_id: string;
    phone_number: string;
    email: string;
    website: string;
    office_address: string;
    category: string;
  };
  invoice_number: string;
  reference: string;
  prepared_by: string;
  approved_by: string;
  email: string;
  phone_number: string;
  work_time: string;
  type: string;
  required_by: string;
  company_id: number;
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

interface ProformaPDF {
  proforma_id: number;
  date: string;
  company: ProformaPDFCompany;
  invoice_number: string;
  reference: string;
  prepared_by: string;
  approved_by: string;
  email: string;
  phone_number: string;
  work_time: string;
  type: string;
  required_by: string;
  company_id: number;
  observations: ProformaPDFObservation[];
  packages: ProformaPDFPackage[];
  personal_proyecto: ProformaPDFPersonal[];
  areas: ProformaPDFArea[];
}
interface ProformaPDFCompany {
  company_id: number;
  business_name: string;
  tax_id: string;
  phone_number: string;
  email: string;
  website: string;
  office_address: string;
  category: string;
}

interface ProformaPDFObservation {
  observation_id: number;
  description: string;
  proforma_id: number;
}

interface ProformaPDFPackage {
  package_id: number;
  name: string;
  price: string;
  note_price: string;
  proforma_id: number;
}

interface ProformaPDFArea {
  area_id: number;
  name: string;
  items: ProformaPDFItem[];
}

interface ProformaPDFItem {
  item_id: number;
  detail: string;
  description: string | null;
  area_id: number;
  package_1: PackageDetail;
  package_2: PackageDetail;
  package_3: PackageDetail;
}

interface PackageDetail {
  id: number;
  value: string;
  package_id: number;
  item_id: number;
}

interface ProformaPDFPersonal {
  personal_id: number;
  name: string;
  lastname: string;
  position: {
    name: string;
  };
}