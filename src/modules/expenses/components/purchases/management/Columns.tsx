import { useState } from "react";
import { ColumnDef } from "@tanstack/react-table";
import { DialogContent, DialogFooter, DialogHeader} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Purchase as PurchaseDetailType } from "@/types/purchase";
import { ArrowUpDown, Loader2} from "lucide-react";
import { Trash } from 'lucide-react';
import { useQueryClient } from "react-query";
import api from "@/services/api";
import { AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { AlertDialog } from "@radix-ui/react-alert-dialog";

export const columns: ColumnDef<PurchaseDetailType>[] = [
  {
    accessorKey: "id",

    header: ({ column }) => {
      return (
        <div className="flex items-center justify-center">
          <span>N°</span>
        </div>
      );
    },
    cell: ({ row }) => <div className="flex items-center justify-center">{row.getValue("id")}</div>,
  },
  {
    accessorKey: "product",
    header: ({ column }) => {
      return (
        <div className="flex items-center justify-center">
          <span>Nombre</span>
        </div>
      );
    },
    cell: ({ row }) => <div className="flex items-center justify-center">{row.getValue("product")}</div>,
  },
  {
    accessorKey: "quantity",
    header: ({ column }) => {
      return (
        <div className="flex items-center justify-center">
          <span>Cantidad</span>
        </div>
      );
    },
    cell: ({ row }) => <div className="flex items-center justify-center">{row.getValue("quantity")}</div>,
  },
  {
    accessorKey: "price",
    header: ({ column }) => {
      return (
        <div className="flex items-center justify-center">
          <span>Precio</span>
        </div>
      );
    },
    cell: ({ row }) => <div className="flex items-center justify-center">{row.getValue("price")}</div>,
  },
  {
    id: "delete",
    enableHiding: false,
    cell: ({ row }) => {
      const queryClient = useQueryClient();
      const promotion = row.original;
      const idpromotion = promotion.id;
      const [isPending, setIsPending] = useState(false);
      const [isOpen, setIsOpen] = useState(false);
      const [error, setError] = useState<string | null>(null);

      const handleOpen = () => setIsOpen(true);
      const handleClose = () => setIsOpen(false);

      const handleDeletePromotion = async () => {
        setIsPending(true);

        try {
          const response = await api.delete(`promotions/delete/${idpromotion}`);
          if (response.status === 204) {
            console.log("Promocion eliminada exitosamente.");
            // Actualizar datos localmente aquí
            queryClient.invalidateQueries("promocion");
          } else {
            console.error(
              "Error al eliminar la promoción. Estado de respuesta:",
              response.status
            );
          }
        } catch (error: any) {
          console.error("Error general:", error);

          if (error.response && error.response.status === 400) {
            console.log(
              "La promoción no se puede eliminar. Estado de respuesta:",
              error.response.status
            );

            setError(
              "No se puede eliminar porque tiene productos relacionados"
            );
          } else if (error.response) {
            console.error(
              "Error en la respuesta del servidor:",
              error.response.data
            );
          } else if (error.request) {
            console.error(
              "No se recibió respuesta del servidor:",
              error.request
            );
          } else {
            console.error(
              "Error durante la configuración de la solicitud:",
              error.message
            );
          }
        } finally {
          setIsPending(false);
        }
      };

      return (
        <AlertDialog>
          <AlertDialogTrigger asChild>
          <div className="flex items-center justify-center h-2">
            <Trash className="inline-block w-4" onClick={handleOpen}/>
            </div>
          </AlertDialogTrigger>
          <form id="delete-user-form" className="space-y-7 w-[97%] p-[0.2rem]">
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Eliminar Promoción</AlertDialogTitle>
                <AlertDialogDescription>
                  ¿Estás seguro de que quieres eliminar esta promoción?
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter className="flex sm:justify-between gap-4">
                <AlertDialogCancel className="w-full" onClick={handleClose}>
                  Cancelar
                </AlertDialogCancel>
                <Button
                  className="w-full"
                  disabled={isPending}
                  variant="destructive"
                  type="submit"
                  form="add-user-form"
                  onClick={handleDeletePromotion}
                >
                  {isPending && (
                    <Loader2
                      className="mr-2 h-4 w-4 animate-spin"
                      aria-hidden="true"
                    />
                  )}
                  Eliminar
                  <span className="sr-only">Agregar nueva promoción</span>
                </Button>
              </AlertDialogFooter>
              {error && <div className="text-destructive mt-2">{error}</div>}
            </AlertDialogContent>
          </form>
        </AlertDialog>
      );
    },
  },
];
