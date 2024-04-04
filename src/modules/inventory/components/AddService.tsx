import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { DialogDescription } from "@radix-ui/react-dialog";
import { ProductForm } from "./ProductForm";
import { Loader2 } from "lucide-react";
import { ServiceForm } from "./ServiceForm";

const AddService = () => {
    const [open, setOpen] = useState(false);
    const [isPending, setIsPending] = useState(false);

    return (
        <Dialog open={open} onOpenChange={setOpen} >
            <DialogTrigger asChild>
                <Button className="min-w-[150px]" >Añadir Servicio</Button>
            </DialogTrigger>
            <DialogContent className="max-w-6xl">
                <DialogHeader>
                    <DialogTitle>Nuevo Servicio</DialogTitle>
                    <DialogDescription>
                        En este formulario puedes crear un nuevo Servicio
                    </DialogDescription>
                </DialogHeader>
                <ServiceForm
                    mode="create"
                    setIsPending={setIsPending}
                    setIsOpen={setOpen}
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
                        form="add-service-form"
                    >
                        {isPending && (
                            <Loader2
                                className="mr-2 h-4 w-4 animate-spin"
                                aria-hidden="true"
                            />
                        )}
                        Añadir Servicio
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default AddService;