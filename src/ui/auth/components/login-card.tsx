import { Card, CardContent } from "@/components/ui/card";
import { LoginForm } from "./login-form";
import { LogoIcon } from "@/components/icons";

export function LoginCard() {
  return (
    <Card
      className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10
      w-full md:w-[40rem] xl:w-[55rem] h-full md:h-[55rem] xl:h-auto
      p-[4rem] lg:mx-0 
      flex flex-col md:flex-row items-center justify-center
      bg-background/25 backdrop-blur-2xl shadow-xl rounded-none md:rounded-3xl border-white/30 dark:border-white/10 overflow-hidden"
    >
      <CardContent className="w-full flex flex-col xl:flex-row items-center p-0">
        <div className="w-full flex items-center justify-center box-border">
          <LogoIcon className="scale-50 xl:scale-75 w-full xl:-translate-x-10" />
        </div>
        <LoginForm />
      </CardContent>
    </Card>
  );
}
