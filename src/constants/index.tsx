import { ClipboardList, UserCircle, User, Wrench } from "lucide-react";


const MENU_ITEMS = [
  {
    name: "Usuarios",
    url: "/",
    icon: <UserCircle />,
  },
  {
    name: "Inventario",
    url: "/inventory",
    icon: <ClipboardList />,
  },
  {
    name: "Clientes",
    url: "/clients",
    icon: <User />,
  },
  {
    name: "Configuracion",
    url: "/configuration",
    icon: <Wrench />,
  },
];


export { MENU_ITEMS };
