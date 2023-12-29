import {
  FileBarChart,
  Upload,
  UserCircle,
} from "lucide-react";

const MENU_ITEMS = [
  {
    name: "Usuarios",
    url: "/",
    icon: <UserCircle />,
  },
  {
    name: "Productos",
    url: "/products",
    icon: <FileBarChart />,
  },
  {
    name: "Inventario",
    url: "/inventory",
    icon: <Upload />,
  },
];

export { MENU_ITEMS };
