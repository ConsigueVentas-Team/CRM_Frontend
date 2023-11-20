import { TailwindIndicator } from "@/components/tailwind-indicator";
import { LoginPatternAnimate } from "@/ui/auth/components/login-pattern";

interface Props {
  children: React.ReactNode;
}

function AuthLayout({ children }: Props) {
  return (
    <div className="w-screen h-screen bg-background">
      {children}
      <LoginPatternAnimate />
      <TailwindIndicator />
    </div>
  );
}

export default AuthLayout;
