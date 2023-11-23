import { TailwindIndicator } from "@/components/tailwind-indicator";
import LoginBackground from "@/assets/bg-login.jpg";

interface Props {
  children: React.ReactNode;
}

function AuthLayout({ children }: Props) {
  return (
    <div className="relative w-screen h-screen bg-muted">
      {children}
      <TailwindIndicator />
      <div
        className="w-screen h-screen mix-blend-multiply"
      >
        <img
          src={LoginBackground}
          alt="Background"
          className="grayscale object-cover w-full h-full opacity-20"
        />
      </div>
    </div>
  );
}

export default AuthLayout;
