import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import { CategoriaDetail as CategoriaDetailType } from "@/types/auth";
import { Button } from "@/components/ui/button";
import { ArrowUpDown, Loader2 } from "lucide-react";
import { CategoriaEdit } from "../CategoriaEdit";
import {
  Dialog,
  DialogClose,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@radix-ui/react-dialog";
import {
  DialogContent,
  DialogFooter,
  DialogHeader,
} from "@/components/ui/dialog";
import { useState } from "react";
import api from "@/services/api";
import { useQueryClient } from "react-query";
import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { AlertDialog } from "@radix-ui/react-alert-dialog";
import { Badge } from "@/components/ui/badge";

export const columns: ColumnDef<CategoriaDetailType>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        className="ml-4"
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },

  {
    accessorKey: "name",
    
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Nombres
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const colorIndex = row.getValue("color") as number;
      const categoryColors = [
        "bg-blue-500",
        "bg-green-500",
        "bg-red-500",
        "bg-yellow-500",
        "bg-teal-500",
        "bg-violet-500",
      ];

      const categoryName = row.getValue("name") as string;

      return (
        <Badge className={`${categoryColors[colorIndex]}`}>
          {categoryName}
        </Badge>
      );
    },
  },

  {
    accessorKey: "description",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Descripcion
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div>{row.getValue("description")}</div>,
  },
  
  {
    accessorKey: "color",
    header: ({ column }) => {
      return (
        <Button
          className="hidden"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Color
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return <div className="hidden">{row.getValue("color")}</div>;
    },
  },

  {
    id: "edit",
    enableHiding: false,

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    cell: ({ row }) => {
      const categoria = row.original;
      const [isPending, setIsPending] = useState(false);
      const [isOpen, setIsOpen] = useState(false);

      return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button variant="outline">Editar</Button>
          </DialogTrigger>
          <DialogContent className="gap-8">
            <DialogHeader>
              <DialogTitle>Editar Categoria</DialogTitle>
              <DialogDescription>
                En este formulario puedes editar la categoria
              </DialogDescription>
            </DialogHeader>
            <CategoriaEdit
              categoria={categoria}
              setIsPending={setIsPending}
              setIsOpen={setIsOpen}
            />
            <DialogFooter className="flex sm:justify-between gap-4">
              <DialogClose asChild>
                <Button className="w-full" variant="outline">
                  Cerrar
                </Button>
              </DialogClose>
              <Button
                className="w-full"
                disabled={isPending}
                type="submit"
                form="edit-user-form"
              >
                {isPending && (
                  <Loader2
                    className="mr-2 h-4 w-4 animate-spin"
                    aria-hidden="true"
                  />
                )}
                Guardar cambios
                <span className="sr-only">Editar nuevo categoria</span>
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      );
    },
  },

  {
    id: "delete",
    enableHiding: false,
    cell: ({ row }) => {
      const queryClient = useQueryClient();
      const categoria = row.original;
      const idcategoria = categoria.id;
      const [isPending, setIsPending] = useState(false);
      const [isOpen, setIsOpen] = useState(false);

      const handleOpen = () => setIsOpen(true);
      const handleClose = () => setIsOpen(false);

      const handleDeleteCategoria = async () => {
        handleOpen();

        try {
          const response = await api.delete(`categories/delete/${idcategoria}`);
          if (response.status === 204) {
            console.log("Categoría eliminada exitosamente.");
            // Actualizar datos localmente aquí
            queryClient.invalidateQueries("categoria");
          } else {
            console.error(
              "Error al eliminar la categoría. Estado de respuesta:",
              response.status
            );
          }
        } catch (error) {
          console.error("Error al intentar eliminar la categoría:", error);
        } finally {
          handleClose();
        }
      };

      return (
        <AlertDialog>
          <AlertDialogTrigger className="inline-block px-4 py-2 font-bold text-white bg-red-500 rounded hover:bg-red-600  ">
            Eliminar
          </AlertDialogTrigger>
          <form id="delete-user-form" className="space-y-7 w-[97%] p-[0.2rem]">
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Eliminar Categoría</AlertDialogTitle>
                <AlertDialogDescription>
                  ¿Estás seguro de que quieres eliminar esta categoría?
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter className="flex sm:justify-between gap-4">
                <AlertDialogCancel className="w-full" onClick={handleClose}>
                  Cancelar
                </AlertDialogCancel>
                <AlertDialogAction
                  disabled={isPending}
                  className="w-full inline-block px-4 py-2 font-bold text-white bg-red-500 hover:bg-red-600"
                  onClick={handleDeleteCategoria}
                >
                  {isPending && (
                    <Loader2
                      className="mr-2 h-4 w-4 animate-spin"
                      aria-hidden="true"
                    />
                  )}
                  Eliminar
                  <span className="sr-only">Categoria Eliminada</span>
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </form>
        </AlertDialog>
      );
    },
  },
];