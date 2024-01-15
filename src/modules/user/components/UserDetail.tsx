import { Button } from "@/components/ui/button";
import {
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetTitle,
} from "@/components/ui/sheet";
import { User, User as UserDetailType } from "@/types/auth";
import { Pencil, Trash } from "lucide-react";
import UserEditForm from "./UserEditForm";
import { useState } from "react";
import api from "@/services/api";
import { Toast } from "@/components/ui/toast";
import { toast } from "@/hooks/useToast";
interface Props {
  user: UserDetailType;
}

export function UserDetail({ user }: Props) {
  const [edit, setEdit] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputEditar = () => {
    setEdit(!edit);
  };

  const handleDeleteUser = async (user: User) => {
    try {
      const response = await api.delete(`/users/delete/${user.id}`);

      if (response.status === 200) {
        toast({
          title: "Cuenta desactivada exitosamente",
        });
      } else {
        toast({
          title: "Esta cuenta esta desactivada",
        });
      }
    } catch (error) {
      toast({
        title: "Error al desactivar cuenta",
        variant: "destructive",
      });
    }
  };

  return (
    <SheetContent>
      <SheetTitle>Información del usuario</SheetTitle>
      <div className="pt-8">
        <div className="flex flex-col items</ResizablePanel>-center gap-4">
          <img
            src="https://images.unsplash.com/flagged/photo-1595514191830-3e96a518989b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlcmZpbCUyMGRlJTIwaG9tYnJlfGVufDB8fDB8fHww"
            alt="perfil"
            className="mx-auto rounded-full w-48 h-48 2xl:w-60 2xl:h-60 flex-initial object-cover"
          />
          <p className="flex flex-col items-center mb-[0.5rem]">
            {user.name} {user.lastname}
            <span className="text-muted-foreground"></span>
          </p>
          <UserEditForm edit={edit} user={user} />
        </div>
      </div>
      {edit ? (
        <SheetFooter className="mt-8 md:mt-3 sm:justify-center gap-9">
          <Button type="button">
            <Pencil className="mr-2 h-4 w-4" aria-hidden="true" />
            Editar
          </Button>
          <Button
            onClick={() => handleDeleteUser(user)}
            type="button"
            variant="destructive"
          >
            <Trash className="mr-2 h-4 w-4" aria-hidden="true" />
            Eliminar
          </Button>
        </SheetFooter>
      ) : (
        <SheetFooter className="mt-8 md:mt-3 sm:justify-center gap-9">
          <Button onClick={handleInputEditar} type="button">
            <Pencil className="mr-2 h-4 w-4" aria-hidden="true" />
            Aplicar
          </Button>
          <Button type="button" variant="outline">
            <Trash className="mr-2 h-4 w-4" aria-hidden="true" />
            Restablecer
          </Button>
        </SheetFooter>
      )}
    </SheetContent>
  );
}
