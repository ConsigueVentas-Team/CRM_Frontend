import { ClipboardList, UserCircle, User, Home, Bolt } from "lucide-react";

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
    icon: <User />,
  },
  {
    name: "Configuración",
    url: "/configuration",
    icon: <Bolt />,
  },
];

export { MENU_ITEMS };
