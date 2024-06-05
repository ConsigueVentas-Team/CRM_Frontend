import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { ItemForm } from "./ItemForm";
import { Item as ItemDetail } from '@/types/purchase';
  
export function PurchaseActions({ onItemsChange }: { onItemsChange: (items: ItemDetail[]) => void }) {
    const [isPending, setIsPending] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [items, setItems] = useState<ItemDetail[]>([]);

  const handleAddItem = (item: ItemDetail) => {
    setItems((prevItems) => {
      const newItems = [...prevItems, item];
      onItemsChange(newItems);
      return newItems;
    });
  };
  
    return (
       <>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button className="bg-primary font-bold py-2 px-4 rounded mb-5">
            +Agregar item
          </Button>
        </DialogTrigger>
        <DialogContent className="gap-5 max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Nuevo item</DialogTitle>
            <DialogDescription>
              {/* En este formulario puedes crear una nuevo Item */}
            </DialogDescription>
          </DialogHeader>
          <ItemForm
            setIsPending={setIsPending}
            setIsOpen={setIsOpen}
            onAddItem={handleAddItem}
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
              form="add-item-form"
            >
              {isPending && (
                <Loader2
                  className="mr-2 h-4 w-4 animate-spin"
                  aria-hidden="true"
                />
              )}
              Agregar
            </Button>
          </DialogFooter>
        </DialogContent>
        </Dialog>
       </> 
    );
  }
  