import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import { PromotionDetail as PromotionDetailType} from "@/types/auth";
import { Button } from "@/components/ui/button";
import { ArrowUpDown, HandPlatter, Loader2,  ShoppingCart } from "lucide-react";
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
import { categoryColors } from "@/lib/utils";
import { Column } from '../../../../../types/kboard';

export const columns: ColumnDef<PromotionDetailType>[] = [
  {
    id: "tipo",
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

      const promotionName = row.getValue("name") as string;

      return (
        <Badge className={`${categoryColors[colorIndex]}`}>
          {promotionName}
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
    cell: ({ row }) => <div className="2xl:w-72">{row.getValue("description")}</div>,
  },
  
  {
    accessorKey: "discount",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Descuento
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return <div className="ml-11">{row.getValue("discount")}</div>;
    },
  },

  {
    id: "edit",
    enableHiding: false,

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    cell: ({ row }) => {
      const queryClient = useQueryClient();
      const promotion = row.original;
      const [isPending, setIsPending] = useState(false);
      const [isOpen, setIsOpen] = useState(false);

      return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button variant="outline">Editar</Button>
          </DialogTrigger>
          <DialogContent className="gap-8">
            <DialogHeader>
              <DialogTitle>Editar Promocion</DialogTitle>
              <DialogDescription>
                En este formulario puedes editar la promocion
              </DialogDescription>
            </DialogHeader>
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
                <span className="sr-only">Editar nueva promocion</span>
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      );
    },
  },
];
