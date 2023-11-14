import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { LoginForm } from "./login-form";
import { LogoIcon } from "@/components/icons";

export function LoginCard() {
  return (
    <Card className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10
      w-full md:w-[40rem] xl:w-[60rem] h-full md:h-[50rem] xl:h-auto
      py-[6rem] lg:mx-0 
      flex flex-col md:flex-row items-center justify-center
      bg-white/25 backdrop-blur-2xl shadow-xl rounded-none md:rounded-3xl border-white/30 overflow-hidden">
      <CardContent className="flex flex-col xl:flex-row">
        <LogoIcon className="scale-50 xl:scale-75 w-full" />
        <LoginForm />
      </CardContent>
    </Card>
  )
}
