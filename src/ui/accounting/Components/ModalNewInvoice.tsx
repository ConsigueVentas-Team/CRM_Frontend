import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import { Bill } from "@/types/bill";

interface Props {
  factura: Bill;
  setFactura: (factura: Bill) => void;
  modal: boolean;
  alert: string;
  handleCloseModal: () => void;
  handleAddInvoice: () => void;
  handleMonedaChange: (value: string) => void;
  handleEstadoChange: (value: string) => void;
}

function NewInvoice({
  factura,
  setFactura,
  alert,
  handleCloseModal,
  handleAddInvoice,
  handleMonedaChange,
  handleEstadoChange,
}: Props) {
  return (
    <div>
      <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-50"></div>
      <Card className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 max-w-screen-sm p-8 rounded-md shadow-md z-50">
        <CardHeader className="flex items-center">
          <CardTitle className="text-xl">AGREGAR NUEVA FACTURA</CardTitle>
          {alert && <p className="text-red-500">{alert}</p>}
        </CardHeader>
        <CardContent>
          <div className="flex flex-row">
            <div className="p-2">
              <Label>Fecha de Emisión</Label>
              <Input
                type="date"
                value={factura.fechaEmision}
                onChange={(e) =>
                  setFactura({ ...factura, fechaEmision: e.target.value })
                }
              ></Input>
            </div>
            <div className="p-2">
              <Label>Serie</Label>
              <Input
                type="text"
                value={factura.serie}
                onChange={(e) =>
                  setFactura({ ...factura, serie: e.target.value })
                }
              ></Input>
            </div>
            <div className="p-2">
              <Label>Número</Label>
              <Input
                type="number"
                value={factura.numero}
                onChange={(e) =>
                  setFactura({ ...factura, numero: e.target.value })
                }
              ></Input>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="p-2">
              <Label>Ruc</Label>
              <Input
                type="number"
                value={factura.ruc}
                onChange={(e) =>
                  setFactura({ ...factura, ruc: e.target.value })
                }
              ></Input>
            </div>
            <div className="p-2">
              <Label>Razón Social</Label>
              <Input
                type="text"
                value={factura.razSocial}
                onChange={(e) =>
                  setFactura({ ...factura, razSocial: e.target.value })
                }
              ></Input>
            </div>
            <div className="p-2">
              <Label>Dirección</Label>
              <Input
                type="text"
                value={factura.direccion}
                onChange={(e) =>
                  setFactura({ ...factura, direccion: e.target.value })
                }
              ></Input>
            </div>
          </div>
          <div className="p-2">
            <Label>Descripción</Label>
            <Textarea
              placeholder="Escribe Aquí"
              value={factura.descripcion}
              onChange={(e) =>
                setFactura({ ...factura, descripcion: e.target.value })
              }
            />
          </div>
          <div className="flex flex-row">
            <div className="p-2">
              <Label>Monto</Label>
              <Input
                type="number"
                value={factura.monto}
                onChange={(e) =>
                  setFactura({ ...factura, monto: Number(e.target.value) })
                }
              ></Input>
            </div>
            <div className="p-2">
              <Label>Moneda</Label>
              <Select
                value={factura.moneda}
                onValueChange={(value) => handleMonedaChange(value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="soles">Soles</SelectItem>
                    <SelectItem value="dolares">Dolares</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="p-2">
              <Label>Estado</Label>
              <Select
                value={factura.estado}
                onValueChange={(value) => handleEstadoChange(value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="PAGADO">Pagado</SelectItem>
                    <SelectItem value="PENDIENTE">Pendiente</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
        <CardFooter className="pt-2 pl-8 pr-8">
          <div className="w-full flex justify-between">
            <Button onClick={handleCloseModal} className="w-1/3">
              CERRAR
            </Button>
            <Button className="w-1/3" onClick={handleAddInvoice}>
              AGREGAR
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
export default NewInvoice;
