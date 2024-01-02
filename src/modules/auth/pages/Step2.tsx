import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ResetPasswordStep2Form } from "../components/forms/reset-password-form-step2";
import { useTitle } from "@/hooks/useTitle";

export function Step2() {
  useTitle("Restablecer contraseña");
  return (
    <Card
      className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30
      w-full md:w-[30rem] h-full md:h-auto
      bg-background/20 dark:bg-transparent backdrop-blur-xl dark:backdrop-blur-none
      border-background/30 dark:border-none
      flex flex-col justify-center
      p-8 overflow-hidden"
    >
      <CardHeader>
        <CardTitle className="text-2xl">Restablecer la contraseña</CardTitle>
        <CardDescription>
          Ingresa tu dirección de correo electrónico y te enviaremos un código
          de verificación
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ResetPasswordStep2Form />
      </CardContent>
    </Card>
  );
}
