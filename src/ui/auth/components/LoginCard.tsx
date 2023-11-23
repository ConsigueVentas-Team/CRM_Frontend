import { Card, CardContent } from "@/components/ui/card";
import { LoginForm } from "./forms/login-form";
import { LogoIconExpanded } from "@/components/icons";

export function LoginCard() {
  return (
    <Card
      className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30
      w-full md:w-[30rem] h-full md:h-auto bg-transparent
      p-[4rem] lg:mx-0 border-none
      flex flex-col md:flex-row items-center justify-center overflow-hidden"
    >
      <CardContent className="w-full flex flex-col items-center p-0">
        <div className="w-full flex items-center justify-center">
          <LogoIconExpanded className="scale-[0.7] w-full" />
        </div>
        <LoginForm />
      </CardContent>
    </Card>
  );
}
