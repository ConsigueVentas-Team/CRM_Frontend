import * as React from "react";
import { Bill } from "@/types/bill";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";

interface ModalDeleteProps {
  factura: Bill;
  onClose: () => void;
  onDelete: (factura: Bill) => void;
}

const ModalDelete: React.FC<ModalDeleteProps> = ({ factura, onClose, onDelete }) => {
  const handleEliminar = () => {
    onDelete(factura);
    onClose();
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-50"></div>
      <Card className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2/6 max-w-screen-sm p-2 rounded-md shadow-md z-50 bg-white dark:bg-[#17232B]">
        <CardContent>
          <CardDescription className="mt-10 text-xl text-black">¿Desea eliminar esta factura?</CardDescription>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={onClose} className="w-1/4">
            CANCELAR
          </Button>
          <Button className="w-1/4" onClick={handleEliminar}>
            ELIMINAR
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}

export default ModalDelete;
