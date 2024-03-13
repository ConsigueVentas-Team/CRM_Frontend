import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ChevronRight } from "lucide-react";

export function SaleCard() {
  return (
    <div className="flex">
      <Dialog>
        <DialogTrigger asChild>
          <button className="bg-primary text-white p-6 rounded-l-lg flex items-center justify-center group hover:shadow-2xl">
            <span className="mr-2">Ver detalles</span>
            <ChevronRight className="transition-transform transform group-hover:translate-x-4" />
          </button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Detalle venta</DialogTitle>
          </DialogHeader>
            <div className="px-4 py-2">
              <div className="flex justify-between mb-2">
                <p >Nombre Producto</p>
              </div>
              <div>
                <p>Fecha y hora:</p>
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
                <p>S/ 500.00</p>
                </div>  
              </div>
          </DialogContent>
          </Dialog>
          <div className="bg-white rounded-tr-lg rounded-br-lg shadow-lg p-6 flex-grow">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="text-xl font-bold">Nombre producto</h3>
                <p className="text-gray-500">Hace 2 horas</p>
              </div>
              <div>
                <span className="text-green-500 text-2xl font-bold">S/ 500.00</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500">Cliente:</p>
                <p className="font-bold">Jhon Doe</p>
              </div>
              <div>
                <p className="text-gray-500">Vendedor:</p>
                <p className="font-bold">Unknown</p>
              </div>
            </div>
          </div>
        </div>
  );
}

