import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { LoginSchema } from "@/lib/validators/auth";
import { Checkbox } from "@/components/ui/checkbox";
import api from "@/services/api";
import { useDispatch } from "react-redux";
import { login } from "@/store/auth";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "@/hooks/useToast";
import { useState } from "react";
import { EyeIcon, EyeOffIcon, Loader2 } from "lucide-react";

export function LoginForm() {
  const [isPending, setIsPending] = useState(false)
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      username: "",
      password: "",
      remember: false,
    },
  });

  async function onSubmit(values: z.infer<typeof LoginSchema>) {
    setIsPending(true);
    try {
      const response = await api.post("/login", values);
      if (response.data.access) {
        dispatch(login({ ...response.data, remember: values.remember }));
        toast({
          title: "Bienvenido, " + values.username,
        });
        navigate("/");
      } else {
        console.error(
          "El token de acceso no está presente en la respuesta del servidor"
        );
      }
    } catch (error) {
      toast({
        title: "Algo salió mal",
        description: "Error al iniciar sesión. Inténtalo de nuevo más tarde.",
        variant: "destructive",
      });
    } finally {
      setIsPending(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
        <h3 className="text-3xl text-center font-medium mb-16">
          Iniciar sesión
        </h3>
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Usuario</FormLabel>
              <FormControl>
                <Input variant="glass" placeholder="Usuario" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contraseña</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    variant="glass"
                    type={showPassword ? "text" : "password"}
                    placeholder="**********"
                    {...field}
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOffIcon className="h-5 w-5 text-muted-foreground" />
                    ) : (
                      <EyeIcon className="h-5 w-5 text-muted-foreground" />
                    )}
                  </button>
                </div>
              </FormControl>
            </FormItem>
          )}
        />
        <div className="flex justify-between gap-4">
          <FormField
            control={form.control}
            name="remember"
            render={({ field }) => (
              <FormItem className="flex items-center space-x-3 space-y-0 ">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mt-0">
                  Recuérdame
                </FormLabel>
                <FormMessage />
              </FormItem>
            )}
          />
          <Link to="/login/reset-password">
            <Button type="button" variant="link">¿Olvidaste tu contraseña?</Button>
          </Link>
        </div>
        <Button disabled={isPending} className="w-full" type="submit">
          {isPending && (
            <Loader2
              className="mr-2 h-4 w-4 animate-spin"
              aria-hidden="true"
            />
          )}
          Ingresar
          <span className="sr-only">
            Continuar para restablecer la verificación de contraseña
          </span>
        </Button>
      </form>
    </Form>
  );
}
