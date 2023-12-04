import { FileBarChart, FileText, Layout, PieChart, Receipt, Upload, UserCircle } from "lucide-react";

const MENU_ITEMS = [
  {
    name: "Inicio",
    url: "/",
    icon: <Layout/>,
  },
  {
    name: "Gastos",
    url: "/expense",
    icon: <Receipt/>,
  },
  {
    name: "Reportes",
    url: "/reports",
    icon: <PieChart/>,
  },
  {
    name: "Facturación",
    url: "/invoice",
    icon: <FileText/>,
  },
  {
    name: "Proformas",
    url: "/proforma",
    icon: <FileBarChart/>,
  },
  {
    name: "Usuarios",
    url: "/users",
    icon: <UserCircle/>,
  },
  {
    name: "Files",
    url: "/file",
    icon: <Upload/>,
  },  
];

export { MENU_ITEMS };
