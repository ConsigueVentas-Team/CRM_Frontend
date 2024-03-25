import { ChevronRight } from "lucide-react";
import React, { useState } from "react";
import { Sale} from "@/types/sale";
import { ItemCard } from "./ItemCard";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface SaleCardProps {
  sale: Sale;
  saleType: string;
}

export const SaleDialog: React.FC<SaleCardProps> = ({
  sale,
  saleType,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="bg-primary text-white p-6 flex items-center justify-end">
          <span className="mr-2">Ver detalles</span>
          <ChevronRight className="transition-transform transform group-hover:translate-x-4" />
        </button>
      </DialogTrigger>
      <DialogContent>
        <ItemCard sale={sale} saleItem={sale.items[0]} />
      </DialogContent>
    </Dialog>
  );
};


    

/*

<Card className="h-full rounded-sm border-none">
        </Card>
          <DialogHeader>
            <DialogTitle>Detalle del {saleType === "Productos" ? "producto" : "servicio"}</DialogTitle>
          </DialogHeader>
          <div className="px-4 py-2">
            <div className="flex justify-between mb-2">
              <p>Nombre Producto</p>
            </div>
            <div>
              <p>Fecha y hora</p>
            </div>
            <div>
              <p>Jhon Doe</p>
            </div>
            <div>
              <p>Unknown</p>
            </div>
            <hr className="my-2 border-gray-300" />
            <div className="flex justify-between mb-2">
              <p className="font-bold">Total:</p>
              <p>${sale.amount}</p>
            </div>
          </div>


*/    

  
   

    /*<DialogContent>
          <DialogHeader>
            <DialogTitle>Detalle del {category === 0 ? "producto" : "servicio"}</DialogTitle>
          </DialogHeader>
          <div className="px-4 py-2">
            <div className="flex justify-between mb-2">
              <p>Nombre Producto</p>
            </div>
            <div>
              <p>Fecha y hora</p>
            </div>
            <div>
              <p>Jhon Doe</p>
            </div>
            <div>
              <p>Unknown</p>
            </div>
            <hr className="my-2 border-gray-300" />
            <div className="flex justify-between mb-2">
              <p className="font-bold">Total:</p>
              <p>`${sale.amount}`</p>
            </div>
          </div>
        </DialogContent>


  );*/

    




/*const [isLoading, setIsLoading] = useState(true);
    const [isPending, setIsPending] = useState(false);
    const [open, setOpen] = useState(false);
    
    const queryClient = useQueryClient();
    const form = useForm<z.infer<typeof ProductoSchema>>({
    resolver: zodResolver(ProductoSchema),
        defaultValues: {
            name:product?.name,
            description: product?.description,
            price:product?.price,
            stock:product?.stock,
            security_stock: product?.security_stock,
            barcode:product?.barcode,
            state:product?.state,
            category:product?.category,
            image_url:product?.image_url,
            image:product?.image,
        },
  });

  // TODO on submit*/


 