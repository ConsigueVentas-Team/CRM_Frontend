import { LoginCard } from "../components/login-card";
import { LoginPatternLeft, LoginPatternRight } from "@/components/patterns";
import { TailwindIndicator } from "@/components/tailwind-indicator";

export function ResetPassword() {
  return (
    <>
      <LoginCard />
      <LoginPatternRight className="fixed top-0 right-0 bottom-0 h-screen z-0 translate-x-16" />
      <LoginPatternLeft className="fixed top-0 left-0 bottom-0 h-screen z-0 -translate-x-16" />
      <TailwindIndicator />
    </>
  );
}
