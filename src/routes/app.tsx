import AppLayout from "@/layouts/AppLayout";
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
        element: <div>Inventario</div>,
      },
      {
        path: "products",
        element: <div>Products</div>,
      },
    ],
  },
];

export default appRouter;
