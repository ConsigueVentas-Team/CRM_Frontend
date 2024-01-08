import { ClipboardList, UserCircle } from "lucide-react";

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
];

export { MENU_ITEMS };
