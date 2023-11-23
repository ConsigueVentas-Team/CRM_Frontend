import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ResetPasswordStep2Form } from "../components/forms/reset-password-form-step2";

export function Step2() {
  return (
    <Card
      className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30
      w-full md:w-[30rem] h-full md:h-auto bg-transparent
      flex flex-col justify-center
      p-8 border-none overflow-hidden"
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
