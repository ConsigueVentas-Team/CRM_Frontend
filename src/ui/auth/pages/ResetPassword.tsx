import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ResetPasswordForm } from "@/ui/auth/components/forms/reset-password-form"

export default function ResetPasswordPage() {
  return (
    <Card
      className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10
      w-full h-full md:w-auto md:h-auto
      p-8 lg:p-16
      bg-background/25 backdrop-blur-2xl shadow-xl rounded-none md:rounded-3xl border-white/30 dark:border-white/10 overflow-hidden"
    >
      <CardHeader>
        <CardTitle className="text-2xl">Restablecer la contraseña</CardTitle>
        <CardDescription>
          Ingresa tu dirección de correo electrónico y te enviaremos un código de verificación
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ResetPasswordForm />
      </CardContent>
    </Card>
  )
}
