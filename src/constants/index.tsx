import { ClipboardList, ShoppingBasket, UserCircle } from "lucide-react";

const MENU_ITEMS = [
  {
    name: "Usuarios",
    url: "/",
    icon: <UserCircle />,
  },
  {
    name: "Productos",
    url: "/products",
    icon: <ShoppingBasket />,
  },
  {
    name: "Inventario",
    url: "/inventory",
    icon: <ClipboardList />,
  },
];

export { MENU_ITEMS };
