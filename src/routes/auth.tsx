import Login from "../ui/auth/pages/Login";
import Register from "../ui/auth/pages/Register";

import AuthLayout from "../layouts/AuthLayout";

const authRouter = {
  path: "/",
  element: <AuthLayout />,
  children: [
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "register",
      element: <Register />,
    },
    {
      path: "*",
      element: <Login />,
    },
  ],
};

export default authRouter;
