import { Button } from "@/components/ui/button";
import {
  SheetContent,
  SheetFooter,
  SheetTitle,
} from "@/components/ui/sheet";
import { ClientDetail as ClientDetailType } from "@/types/auth";
import { Pencil, Trash } from "lucide-react";
import CLientDataEditable from "./ClientDataEditable";
import { getInitials } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";
//import UserDataEditable from "./UserDataEditable"

interface Props {
  client: ClientDetailType;
}

export function ClientDetail({ client }: Props) {

  const [edit, setEdit] = useState(true);
  //const [isLoading, setIsLoading] = useState(false);

  const handleInputEditar = () => {
    setEdit(!edit);
  };

  return (
    <SheetContent>
      <SheetTitle>Información del cliente</SheetTitle>
      <div className="pt-8">
      <div className="flex flex-col items</ResizablePanel>-center gap-4">
          <Avatar className="mx-auto rounded-full w-48 h-48 flex-initial object-cover">
            <AvatarImage src={""} alt="image profile user" />
            <AvatarFallback className="text-3xl">
              {getInitials(client.name, client.lastname)}
            </AvatarFallback>
          </Avatar>
          <p className="flex flex-col items-center mb-[0.5rem]">
            {client.name} {client.lastname}
            <span className="text-muted-foreground"></span>
          </p>
          <CLientDataEditable edit={edit} client={client} />
        </div>
      </div>
      {edit ? (
        <SheetFooter className="mt-8 md:mt-3 sm:justify-center gap-9">
          <Button onClick={handleInputEditar} type="button">
            <Pencil className="mr-2 h-4 w-4" aria-hidden="true" />
            Editar
          </Button>
          <Button

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