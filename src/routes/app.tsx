import AppLayout from "@/layouts/AppLayout";
import { Inventory } from "@/modules/inventory/pages/inventory";
import { Users } from "@/modules/user/pages/Users";

const appRouter = [
  {
    path: "/",
    element: (
      // <ProtectedRoute>
      <AppLayout />
      //</ProtectedRoute>
    ),
    children: [
      {
        path: "/",
        element: <Users />,
      },
      {
        path: "inventory",
        element: <Inventory></Inventory>,
      },
      {
        path: "products",
        element: <div>Productos</div>,
      },
    ],
  },
];

export default appRouter;