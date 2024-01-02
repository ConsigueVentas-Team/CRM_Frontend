import { LoginCard } from "../components/LoginCard";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useTitle } from "@/hooks/useTitle";

export function Login() {
  useTitle("Iniciar sesión");
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, history]);

  return <LoginCard />
}
