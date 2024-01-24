import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import { CategoriaDetail as CategoriaDetailType } from "@/types/auth";
import { Button } from "@/components/ui/button";
import { ArrowUpDown, Loader2 } from "lucide-react";
import {
    Sheet,
    SheetTrigger,
} from "@/components/ui/sheet";
import { CategoriaDetail } from "../CategoriaDetail";
import { CategoriaEdit } from "../CategoriaEdit";
import { Dialog, DialogClose, DialogDescription, DialogTitle, DialogTrigger } from "@radix-ui/react-dialog";
import { DialogContent, DialogFooter, DialogHeader } from "@/components/ui/dialog";
import { isPending } from "@reduxjs/toolkit";
import { CategoriaForm } from "../CategoriaForm";
import { useState } from "react";
import api from "@/services/api";
import { fetchCategorias } from "../../api/apiService";


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
            const colors = ['border-blue-500', 'border-green-500', 'border-red-500', 'border-yellow-500'];
            const colorsText = ['text-blue-500', 'text-green-500', 'text-red-500', 'text-yellow-500'];

            // Clases para el fondo y el borde
            const backgroundClass = `${colors[colorIndex] || colors[0]}`;
            const borderClass = `border border-solid ${colors[colorIndex] || colors[0]}`;
            const TextClass = `text ${colorsText[colorIndex] || colors[0]}`;


            // Aplica las clases al badge
            const badgeStyle = `inline-block px-2 py-1 rounded-full ${backgroundClass} ${borderClass} text-${TextClass} `;

            return (
                <div className={badgeStyle}>
                    {row.getValue("name")}
                </div>
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
        cell: ({ row }) => (
            <div>{row.getValue("description")}</div>
        ),
    },
    {
        accessorKey: "color",
        header: ({ column }) => {
            return (
                <Button className="hidden"
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Color
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
        cell: ({ row }) => {
            return (

                <div className="hidden">{row.getValue("color")}</div>
            );
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
                        <CategoriaEdit categoria={categoria} />
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
                                form="add-user-form"
                            >
                                {isPending && (
                                    <Loader2
                                        className="mr-2 h-4 w-4 animate-spin"
                                        aria-hidden="true"
                                    />
                                )}
                                Guardar cambios
                                <span className="sr-only">
                                    Editar nuevo categoria
                                </span>
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
            const categoria = row.original;
            const idcategoria = categoria.id;

            const [isPending, setIsPending] = useState(false);
            const [isOpen, setIsOpen] = useState(false);


            const onDeleteCategoria = async () => {
                setIsOpen(true);
            };

            const confirmDelete = async () => {

                try {
                    const response = await api.delete(`categories/delete/${idcategoria}`);
                    if (response.status === 200) {
                        console.log('Categoría eliminada exitosamente.');
                        // Actualizar datos localmente aquí
                        fetchCategorias();  // Asegúrate de tener una función loadData que actualice los datos
                    } else {
                        console.error('Error al eliminar la categoría. Estado de respuesta:', response.status);
                    }
                } catch (error) {
                    console.error('Error al intentar eliminar la categoría:', error);
                } finally {
                    setIsOpen(false);
                }
            };

            const cancelDelete = () => {
                setIsOpen(false);
            };

            return (
                <>
                    <Button variant="outline" onClick={onDeleteCategoria}>Eliminar</Button>
                    <form id="delete-user-form"
                        className="space-y-7 w-[97%] p-[0.2rem]">
                        <Dialog open={isOpen} onOpenChange={setIsOpen}>
                            <DialogTrigger asChild>
                                <div />
                            </DialogTrigger>
                            <DialogContent className="gap-8">
                                <DialogHeader>
                                    <DialogTitle>Eliminar Categoría</DialogTitle>
                                    <DialogDescription>
                                        ¿Estás seguro de que quieres eliminar esta categoría?
                                    </DialogDescription>
                                </DialogHeader>
                                <DialogFooter className="flex sm:justify-between gap-4">
                                    <DialogClose asChild>
                                        <Button className="w-full" variant="outline" onClick={cancelDelete}>
                                            Cancelar
                                        </Button>
                                    </DialogClose>
                                    <Button
                                        disabled={isPending}
                                        type="submit"
                                        form="delete-user-form"
                                        className="w-full" variant="destructive" onClick={confirmDelete}>
                                        {isPending && (
                                            <Loader2
                                                className="mr-2 h-4 w-4 animate-spin"
                                                aria-hidden="true"
                                            />
                                        )}
                                        Eliminar
                                        <span className="sr-only">
                                            Categoria Eliminada
                                        </span>
                                    </Button>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>
                    </form>
                </>
            );
        },
    },
];
