import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { SheetContent, SheetFooter, SheetTitle, SheetClose } from "@/components/ui/sheet";
import { toast } from "@/hooks/useToast";
import { getInitials } from "@/lib/utils";
import { ClientSchema } from "@/lib/validators/client";
import api from "@/services/api";
import { ClientDetail as ClientDetailType } from "@/types/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { Pencil, Trash } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import CLientDataEditable from "./ClientDataEditable";

interface Props {
  client: ClientDetailType;
}

export function ClientDetail({ client }: Props) {
  const [edit, setEdit] = useState(true);
  const [isPending, setIsPending] = useState(false);
  const [isOpen,setIsOpen] = useState(false);

  const handleInputEdit = () => {
    setTimeout(() => {
      setEdit(!edit);
    }, 500);
    setIsOpen(true);
  };

  const updateForm = useForm<z.infer<typeof ClientSchema>>({
    resolver: zodResolver(ClientSchema),
    defaultValues: {
      name: client?.name,
      lastname: client?.lastname,
      address: client?.address,
      documentNumber: client?.documentNumber,
      documentType: client?.documentType,
      cellNumber: client?.cellNumber,
      email: client?.email,
    },
  });

  const handleDeleteClient = async (client: ClientDetailType) => {
    try {
      const { status } = await api.delete(`/clients/delete/${client.clientID}`);
      status === 200
        ? toast({
            title: "Cuenta desactivada exitosamente",
          })
        : toast({
            title: "El cliente ya está desactivado",
          });
    } catch (error) {
      toast({
        title: "Error al desactivar cliente",
        variant: "destructive",
      });
    }
  };

  return (
    <SheetContent className="w-[400px] sm:min-w-[500px]">
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
          <CLientDataEditable
            edit={edit}
            client={client}
            setIsPending={setIsPending}
            updateForm={updateForm}
          />
        </div>
      </div>
      <SheetFooter className="mt-8 md:mt-3 sm:justify-center gap-9">
        {edit ? (
          <>
            <Button onClick={handleInputEdit} type="button">
              <Pencil className="mr-2 h-4 w-4" aria-hidden="true" />
              Editar
            </Button>
            <Button
              //onClick={() => handleDeleteClient(client)}
              type="button"
              variant="destructive"
              //disabled={!client?.is_active}
            >
              <Trash className="mr-2 h-4 w-4" aria-hidden="true" />
              Eliminar
            </Button>
          </>
        ) : (
          <>
          <SheetClose>
          <Button
              onClick={handleInputEdit}
              type="submit"
              form="update-client-form"
            >
              <Pencil className="mr-2 h-4 w-4" aria-hidden="true" />
              Aplicar
            </Button>
          </SheetClose> 
            <Button
              onClick={() => updateForm.reset()}
              type="button"
              variant="outline"
            >
              <Trash className="mr-2 h-4 w-4" aria-hidden="true" />
              Restablecer
            </Button>
          </>
        )}
      </SheetFooter>
    </SheetContent>
  );
}
