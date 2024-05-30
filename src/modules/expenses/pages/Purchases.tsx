import { Input } from "@/components/ui/input";
import { RadioGroup } from "@/components/ui/radio-group";
import { Select } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { PurchasesDataTable } from "../components/purchases/PurchasesDataTable";
import { useQuery } from "react-query";

const getItems = async () => {
  return [
    { id: 1, product:'Item 1', quantity: 2, price: 10, total: 20},
    { id: 2, product:'Item 2', quantity: 3, price: 20, total: 20},
    { id: 3, product:'Item 3', quantity: 1, price: 30, total: 20},
  ];
}
export function Purchases() {
  const addItem = () => {
    // Aquí puedes agregar la lógica para agregar un nuevo item
  }

  const { data: items, isLoading } = useQuery("items", getItems);

  return (
    <div className="flex flex-col md:flex-row justify-center mt-10">
      <div className="w-full md:w-1/2 mr-0 md:mr-10">
        <Button onClick={addItem} className="bg-primary font-bold py-2 px-4 rounded mb-5">
          +Agregar item
        </Button>
        {/* <Table >
          <TableHeader>
            <TableRow>
              <TableHead className="px-4 py-2 border-b border-foreground bg-background">Nº</TableHead>
              <TableHead className="px-4 py-2 border-b border-foreground bg-background">DETALLE</TableHead>
              <TableHead className="px-4 py-2 border-b border-foreground bg-background">CANTIDAD</TableHead>
              <TableHead className="px-4 py-2 border-b border-foreground bg-background">PRECIO UNITARIO EN BOB</TableHead>
              <TableHead className="px-4 py-2 border-b border-foreground bg-background">SUBTOTAL</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.length > 0 ? items.map((item, index) => (
              <TableRow key={index}>
                <TableCell className="border px-4 py-2">{index + 1}</TableCell>
                <TableCell className="border px-4 py-2">{item.detalle}</TableCell>
                <TableCell className="border px-4 py-2">{item.cantidad}</TableCell>
                <TableCell className="border px-4 py-2">{item.precio}</TableCell>
                <TableCell className="border px-4 py-2">{item.cantidad * item.precio}</TableCell>
              </TableRow>
            )) : (
              <TableRow>
                <TableCell colSpan={5} className="border px-4 py-2">NO HAY ITEMS AGREGADOS.</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table> */}
        <PurchasesDataTable data={items ? items : []} isLoading={isLoading} />
        
        <p className="text-right mt-5 font-bold">TOTAL(BOB): {}</p>
      </div>
      <div className="w-full md:w-1/2 ml-0 md:ml-10 bg-background p-5 rounded shadow-lg">
        <div className="flex flex-col md:flex-row justify-between mb-5">
          <div className="w-full md:w-1/2 pr-0 md:pr-2">
            <Label className="font-bold">CI/NIT (0 : Sin nombre)</Label>
            <Input placeholder="Ingrese CI/NIT" />
          </div>
          <div className="w-full md:w-1/2 pl-0 md:pl-2 mt-5 md:mt-0">
            <Label className="font-bold">NOMBRE CLIENTE</Label>
            <Input placeholder="Ingrese nombre del cliente" />
          </div>
        </div>
        <div className="flex justify-between mb-5">
          <RadioGroup name="paymentMethod">
            <label>CONTADO</label>
            <input type="radio" value="contado" />
            <label>CRÉDITO</label>
            <input type="radio" value="credito" />
          </RadioGroup>
          <RadioGroup name="invoice">
            <label>SIN FACTURA</label>
            <input type="radio" value="sinFactura" />
            <label>CON FACTURA</label>
            <input type="radio" value="conFactura" />
          </RadioGroup>
        </div>
        <div className="mb-5">
          <Label className="font-bold">CUENTA DONDE ABONAR LA VENTA</Label>
          <Select>
            <option>-- Seleccione una opción --</option>
            {/* Aquí puedes agregar las opciones de la cuenta */}
          </Select>
        </div>
        <div>
          <Label className="font-bold">DESCR.</Label>
          <Input placeholder="Ingrese descripción" />
        </div>
      </div>
    </div>
  );
}