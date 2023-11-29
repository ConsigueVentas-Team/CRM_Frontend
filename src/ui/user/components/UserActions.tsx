import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { UserForm } from "./UserForm";
import { Loader2 } from "lucide-react";
import { useState } from "react";

export function UserActions() {
  const [isPending, setIsPending] = useState(false);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Crear usuario</Button>
      </DialogTrigger>
      <DialogContent className="gap-8">
        <DialogHeader>
          <DialogTitle>Nuevo Usuario</DialogTitle>
          <DialogDescription>
            En este formulario puedes crear un nuevo usuario
          </DialogDescription>
        </DialogHeader>
        <UserForm setIsPending={setIsPending} />
        <DialogFooter className="flex sm:justify-between gap-4">
          <DialogClose asChild>
            <Button className="w-full" variant="outline">Cerrar</Button>
          </DialogClose>
          <Button className="w-full" disabled={isPending} type="submit" form="add-user-form">
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
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
