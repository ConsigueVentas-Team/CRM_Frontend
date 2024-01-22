import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogDescription } from "@radix-ui/react-dialog";
import { ProductForm } from "./ProductForm";

const AddProduct = () => {
  const [open, setOpen] = useState(false);
  const [isPending, setIsPending] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Añadir Producto</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Nuevo Usuario</DialogTitle>
          <DialogDescription>
            En este formulario puedes crear un nuevo usuario
          </DialogDescription>
        </DialogHeader>
        <ProductForm
          mode="create"
          setIsPending={setIsPending}
          setIsOpen={setOpen}
        />
        <DialogFooter>
          <Button type="button">Filtrar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddProduct;
