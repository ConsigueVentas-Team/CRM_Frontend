import { useState } from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Item as ItemDetailType } from "@/types/purchase";
import { Trash, Loader2 } from 'lucide-react';
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogTitle, AlertDialogDescription, AlertDialogCancel, AlertDialogFooter } from "@/components/ui/alert-dialog";

const createColumn = (accessorKey: keyof ItemDetailType, label: string): ColumnDef<ItemDetailType> => ({
  accessorKey,
  header: () => (
    <div className="flex items-center justify-center">
      <span>{label}</span>
    </div>
  ),
  cell: ({ row }) => <div className="flex items-center justify-center">{row.getValue(accessorKey)}</div>,
});

export const columns = (onDelete: (name: string) => void): ColumnDef<ItemDetailType>[] => [
  createColumn("name", "Nombre"),
  createColumn("description", "Descripcion"),
  createColumn("quantity", "Cantidad"),
  createColumn("price", "Precio"),
  {
    id: "delete",
    enableHiding: false,
    cell: ({ row }) => {
      const [isOpen, setIsOpen] = useState(false);
      const [isPending, setIsPending] = useState(false);
      const [error, setError] = useState(null);

      const handleOpen = () => setIsOpen(true);
      const handleClose = () => setIsOpen(false);
      const handleDelete = async () => {
        setIsPending(true);
        try {
          await onDelete(row.original.name);
          setIsPending(false);
          handleClose();
        } catch (err) {
          setIsPending(false);
        }
      };


      return (
        <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
          <AlertDialogTrigger asChild>
            <div className="flex items-center justify-center h-2">
              <Trash className="inline-block w-4" onClick={handleOpen}/>
            </div>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogTitle>Eliminar Item</AlertDialogTitle>
            <AlertDialogDescription>
              ¿Está seguro de que quiere eliminar este item?
            </AlertDialogDescription>
            <AlertDialogFooter className="flex sm:justify-between gap-4">
              <AlertDialogCancel className="w-full" onClick={handleClose}>
                Cancelar
              </AlertDialogCancel>
              <Button
                className="w-full"
                disabled={isPending}
                variant="destructive"
                type="submit"
                onClick={handleDelete}
              >
                {isPending && (
                  <Loader2
                    className="mr-2 h-4 w-4 animate-spin"
                    aria-hidden="true"
                  />
                )}
                Eliminar
              </Button>
            </AlertDialogFooter>
            {error && <div className="text-destructive mt-2">{error}</div>}
          </AlertDialogContent>
        </AlertDialog>
      );
    },
  },
];