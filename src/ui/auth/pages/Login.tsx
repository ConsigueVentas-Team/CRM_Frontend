import { LoginCard } from "../components/login-card";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { LoginPatternAnimate } from "../components/login-pattern";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";

export function Login() {
  const {isAuthenticated}= useAuth();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, history]);

  return (
    <>
      <LoginCard />
      <LoginPatternAnimate />
      <TailwindIndicator />
    </>
  );
}
