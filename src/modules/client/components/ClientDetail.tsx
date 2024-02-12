import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetTitle,
} from "@/components/ui/sheet";
import { toast } from "@/hooks/useToast";
import { getInitials } from "@/lib/utils";
import { ClientSchema } from "@/lib/validators/client";
import api from "@/services/api";
import { ClientDetail as ClientDetailType } from "@/types/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { Pencil, Ban, Trash, Check, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useQueryClient } from "react-query";
import { z } from "zod";
import CLientDataEditable from "./ClientDataEditable";

interface Props {
  client: ClientDetailType;
}

export function ClientDetail({ client }: Props) {
  const queryClient = useQueryClient();
  const [edit, setEdit] = useState(true);
  const [isPending, setIsPending] = useState(false);

  const handleCancelUpdate = () => {
    setEdit(true);
    form.reset();
  };

  const form = useForm<z.infer<typeof ClientSchema>>({
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

  const handleUpdateClient = async (client: ClientDetailType) => {
    let status: number;
    try {
      if (client.state) {
        ({ status } = await api.delete(`/clients/delete/${client.clientID}`));
      } else {
        ({ status } = await api.patch(`/clients/update/${client.clientID}`, {
          state: true,
        }));
      }

      if (status >= 400) {
        toast({ title: "Error al actualizar cliente", variant: "destructive" });
      } else {
        toast({ title: "Cliente actualizado exitosamente" });
        queryClient.invalidateQueries("clients");
      }
    } catch (error) {
      toast({
        title: "Error durante la solicitud a la API",
        variant: "destructive",
      });
    }
  };
  return (
    <SheetContent
      onCloseAutoFocus={() => setEdit(true)}
      className="w-[400px] sm:min-w-[500px]"
    >
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
            form={form}
          />
        </div>
      </div>
      <SheetFooter className="mt-8 md:mt-3 sm:justify-center gap-9">
        {edit ? (
          <>
            <Button
              onClick={(event) => {
                setEdit(!edit);
                event.preventDefault();
              }}
            >
              <Pencil className="mr-2 h-4 w-4" aria-hidden="true" />
              Editar
            </Button>
            <SheetClose>
              <Button
                onClick={() => handleUpdateClient(client)}
                type="button"
                variant={client.state ? "destructive" : "outline"}
              >
                {client.state ? (
                  <Trash className="mr-2 h-4 w-4" aria-hidden="true" />
                ) : (
                  <ShieldCheck className="mr-2 h-4 w-4" aria-hidden="true" />
                )}
                {client.state ? "Eliminar" : "Activar"}
              </Button>
            </SheetClose>
          </>
        ) : (
          <>
            <SheetClose>
              <Button
                type="submit"
                form="update-client-form"
                disabled={isPending}
              >
                <Check className="mr-2 h-4 w-4" aria-hidden="true" />
                Aplicar
              </Button>
            </SheetClose>
            <Button
              onClick={handleCancelUpdate}
              type="button"
              variant="outline"
            >
              <Ban className="mr-2 h-4 w-4" aria-hidden="true" />
              Cancelar
            </Button>
          </>
        )}
      </SheetFooter>
    </SheetContent>
  );
}
