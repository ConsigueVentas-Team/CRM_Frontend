import { TailwindIndicator } from "@/components/tailwind-indicator";

interface Props {
  children: React.ReactNode;
}

function AuthLayout({ children }: Props) {
  return (
    <div className="w-screen h-screen bg-background">
      {children}
      <TailwindIndicator />
    </div>
  );
}

export default AuthLayout;
