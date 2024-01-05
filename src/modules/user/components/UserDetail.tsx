import { Button } from "@/components/ui/button";
import {
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetTitle,
} from "@/components/ui/sheet";
import { User as UserDetailType } from "@/types/auth";
import { Pencil, Trash } from "lucide-react";
import UserDataEditable from "./UserDataEditable"

interface Props {
  user: UserDetailType;
}

export function UserDetail({ user }: Props) {
  return (
    <SheetContent>
      <SheetTitle>Información del usuario</SheetTitle>
      <div className="pt-8">
        <div className="flex flex-col items-center gap-4">
          <img
            src="https://images.unsplash.com/flagged/photo-1595514191830-3e96a518989b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlcmZpbCUyMGRlJTIwaG9tYnJlfGVufDB8fDB8fHww"
            alt="perfil"
            className="rounded-full w-48 h-48 2xl:w-60 2xl:h-60 flex-initial object-cover"
          />
          <p className="flex flex-col items-center mb-[0.5rem]">
            {user.nombre} {user.apellidos}
            <span className="text-muted-foreground"></span>
          </p>
          <UserDataEditable/>
        </div>
      </div>
      <SheetFooter className="mt-8 md:mt-3 sm:justify-center gap-9">
        <Button type="button">
          <Pencil className="mr-2 h-4 w-4" aria-hidden="true" />
          Editar
        </Button>
        <Button type="button" variant="destructive">
          <Trash className="mr-2 h-4 w-4" aria-hidden="true" />
          Eliminar
        </Button>
      </SheetFooter>
    </SheetContent>
  );
}
