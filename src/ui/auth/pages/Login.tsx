import { LoginCard } from "../components/login-card";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { LoginPatternAnimate } from "../components/login-pattern";


export function Login() {
  return (
    <>
      <LoginCard />
      <LoginPatternAnimate />
      <TailwindIndicator />
    </>
  );
}
