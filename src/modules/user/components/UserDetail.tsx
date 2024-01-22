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
import { toast } from "@/hooks/useToast";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getInitials } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserSchema } from "@/lib/validators/user";
interface Props {
  user: UserDetailType;
}

export function UserDetail({ user }: Props) {
  const [edit, setEdit] = useState(true);
  const [isPending, setIsPending] = useState(false);

  const handleInputEdit = () => {
    setEdit(!edit);
  };

  const upadteForm = useForm<z.infer<typeof UserSchema>>({
    resolver: zodResolver(UserSchema),
    defaultValues: {
      username: user?.username,
      email: user?.email,
      name: user?.name,
      lastname: user?.lastname,
      document_type: 0,
      document_number: user?.document_number,
      phone: user?.phone,
      address: user?.address,
      role_name: 0,
    },
  });

  const handleDeleteUser = async (user: User) => {
    try {
      const { status } = await api.delete(`/users/delete/${user.id}`);
      status === 200
        ? toast({
            title: "Cuenta desactivada exitosamente",
          })
        : toast({
            title: "Esta cuenta esta desactivada",
          });
    } catch (error) {
      toast({
        title: "Error al desactivar cuenta",
        variant: "destructive",
      });
    }
  };

  return (
    <SheetContent className="w-[400px] sm:min-w-[500px]">
      <SheetTitle>Información del usuario</SheetTitle>
      <div className="pt-8">
        <div className="flex flex-col items</ResizablePanel>-center gap-4">
          <Avatar className="mx-auto rounded-full w-48 h-48 flex-initial object-cover">
            <AvatarImage src={""} alt="image profile user" />
            <AvatarFallback className="text-3xl">
              {getInitials(user.name, user.lastname)}
            </AvatarFallback>
          </Avatar>

          <p className="flex flex-col items-center mb-[0.5rem]">
            {user.name} {user.lastname}
            <span className="text-muted-foreground"></span>
          </p>
          <UserEditForm
            edit={edit}
            user={user}
            setIsPending={setIsPending}
            upadteForm={upadteForm}
          />
        </div>
      </div>
      {edit ? (
        <SheetFooter className="mt-8 md:mt-3 sm:justify-center gap-9">
          <Button onClick={handleInputEdit} type="button">
            <Pencil className="mr-2 h-4 w-4" aria-hidden="true" />
            Editar
          </Button>
          <Button
            onClick={() => handleDeleteUser(user)}
            type="button"
            variant="destructive"
            disabled={!user?.is_active}
          >
            <Trash className="mr-2 h-4 w-4" aria-hidden="true" />
            Eliminar
          </Button>
        </SheetFooter>
      ) : (
        <SheetFooter className="mt-8 md:mt-3 sm:justify-center gap-9">
          <Button
            
            type="submit"
            form="update-user-form"
          >
            <Pencil className="mr-2 h-4 w-4" aria-hidden="true" />
            Aplicar
          </Button>
          <Button
            onClick={() => upadteForm.reset()}
            type="button"
            variant="outline"
          >
            <Trash className="mr-2 h-4 w-4" aria-hidden="true" />
            Restablecer
          </Button>
        </SheetFooter>
      )}
    </SheetContent>
  );
}
