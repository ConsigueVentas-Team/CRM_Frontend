import { ClipboardList, UserCircle, Home, Bolt, Users } from "lucide-react";

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
    name: "Configuración",
    url: "/configuration",
    icon: <Bolt />,
  },
];

export { MENU_ITEMS };
