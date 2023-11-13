import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { LoginForm } from "./login-form";
import { LogoIcon } from "@/components/icons";

export function LoginCard() {
  return (

    <Card className="w-[60rem] py-[6rem] mx-auto mt-[10rem]">
      <CardContent className="flex">
        <LogoIcon className="scale-50" />
        <LoginForm />
      </CardContent>
    </Card>
  )
}
