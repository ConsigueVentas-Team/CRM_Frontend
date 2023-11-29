import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";

export function InvoiceSearch() {
  return (
    <div className="flex justify-center flex-col p-10 pl-20 pr-20 b-20 ml-0 mb-20 mr-0 bg-[#CCCED7] dark:bg-muted">
      <Label className="flex justify-center mb-10 text-xl font-bold">
        ¿Estás buscando una factura?
      </Label>
      <div className="flex flex-row justify-around items-center w-full">
        <div className="flex flex-col w-1/6">
          <Label>Cliente</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Selecciona Cliente" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="--">--</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col w-1/6">
          <Label>Fecha de Emision</Label>
          <Select>
            <Input type="date"></Input>
          </Select>
        </div>
        <div className="flex flex-col w-1/6">
          <Label>Importe</Label>
          <Input placeholder="Escribe el monto" type="number"></Input>
        </div>
        <div className="flex flex-col w-1/8">
          <Button>
            {" "}
            <Search className="mr-2" />
            Buscar
          </Button>
        </div>
      </div>
    </div>
  );
}
