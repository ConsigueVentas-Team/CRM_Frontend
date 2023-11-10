import Login from "../ui/auth/pages/Login";
import Register from "../ui/auth/pages/Register";

const authRouter = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]

export default authRouter;
