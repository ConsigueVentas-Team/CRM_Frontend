import { ClipboardList, UserCircle, Users, Wrench, Home } from "lucide-react";


const MENU_ITEMS = [
  {
    name: "Inicio",
    url: "/",
    icon: <Home />,
  },
  {
    name: "Usuarios",
    url: "/users",
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
    icon: <Users />,
  },
  {
    name: "Configuracion",
    url: "/configuration",
    icon: <Wrench />,
  },
];


export { MENU_ITEMS };
