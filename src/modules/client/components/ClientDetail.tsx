import { Button } from "@/components/ui/button";
import {
  SheetContent,
  SheetFooter,
  SheetTitle,
} from "@/components/ui/sheet";
import { ClientDetail as ClientDetailType } from "@/types/auth";
import { Pencil, Trash } from "lucide-react";
import CLientDataEditable from "./ClientDataEditable";
//import UserDataEditable from "./UserDataEditable"

interface Props {
  client: ClientDetailType;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function ClientDetail({ client }: Props) {
  return (
    <SheetContent>
      <SheetTitle>Información del cliente</SheetTitle>
      <div className="pt-8">
        <div className="flex flex-col items-center gap-4">
          <CLientDataEditable/>
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