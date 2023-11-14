import { ResetPassword } from "@/ui/auth/pages/ResetPassword";
import Register from "../ui/auth/pages/Register";
import { Login } from "@/ui/auth/pages/Login";

const authRouter = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
  },

]

export default authRouter;
