import ResetPasswordPage from "@/ui/auth/pages/ResetPassword";
import { Login } from "@/ui/auth/pages/Login";
import AuthLayout from "@/layouts/AuthLayout";

const createAuthRoute = (element: React.ReactNode) => (
  <AuthLayout>{element}</AuthLayout>
);

const authRouter = [
  {
    path: "/login",
    element: createAuthRoute(<Login />),
  },
  {
    path: "/login/reset-password",
    element: createAuthRoute(<ResetPasswordPage />),
  },
];

export default authRouter;
