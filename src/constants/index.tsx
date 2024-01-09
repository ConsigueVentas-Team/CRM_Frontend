import { ClipboardList, UserCircle, User } from "lucide-react";

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
];

export { MENU_ITEMS };
