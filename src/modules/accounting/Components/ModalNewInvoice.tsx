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
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import formSchema from "../../../lib/validators/accounting"
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

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fechaEmision: "",
      serie: "",
      numero: "",
      ruc: "",
      razSocial: "",
      direccion: "",
      descripcion: "",
      monto: "",
      moneda: "soles",
      estado: "PAGADO",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;
  const lastDayOfMonth = new Date(currentYear, currentMonth, 0).getDate();


  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-50"></div>
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 max-w-screen-sm p-8 rounded-md shadow-md z-50 bg-white dark:bg-[#17232B]">
        <div className="flex justify-center">
          <Label className="text-xl font-bold p-2"> AGREGAR NUEVA FACTURA </Label>
          {alert && <p className="text-red-500">{alert}</p>}
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit((values) => {
            onSubmit(values);
            handleAddInvoice();
            handleCloseModal();
          })}>
            <div className="flex flex-row">
              <div className="p-4">
                <FormField
                  control={form.control}
                  name="fechaEmision"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Fecha de Emisión</FormLabel>
                      <FormControl>
                        <Input
                          type="date"
                          value={factura.fechaEmision}
                          onChange={(e) => {
                            setFactura({ ...factura, fechaEmision: e.target.value });
                            field.onChange(e);
                          }}
                          min={`${currentYear}-${currentMonth.toString().padStart(2, '0')}-01`}
                          max={`${currentYear}-${currentMonth.toString().padStart(2, '0')}-${lastDayOfMonth}`}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="p-2">
                <FormField
                  control={form.control}
                  name="serie"
                  render={({ field }) => (
                    <FormItem className="p-2">
                      <FormLabel>Serie</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          value={factura.serie}
                          onChange={(e) => {
                            setFactura({ ...factura, serie: e.target.value });
                            field.onChange(e);
                          }}
                        ></Input>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="p-2">
                <FormField
                  control={form.control}
                  name="numero"
                  render={({ field }) => (
                    <FormItem className="p-2">
                      <FormLabel>Número</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          value={factura.numero}
                          onChange={(e) => {
                            setFactura({ ...factura, numero: e.target.value });
                            field.onChange(e);
                          }}
                        ></Input>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div className="flex flex-row">
              <div className="p-2">
                <FormField
                  control={form.control}
                  name="ruc"
                  render={({ field }) => (
                    <FormItem className="p-2">
                      <FormLabel>Ruc</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          value={factura.ruc}
                          onChange={(e) => {
                            setFactura({ ...factura, ruc: e.target.value });
                            field.onChange(e);
                          }}
                        ></Input>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="p-2">
                <FormField
                  control={form.control}
                  name="razSocial"
                  render={({ field }) => (
                    <FormItem className="p-2">
                      <FormLabel>Razón Social</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          value={factura.razSocial}
                          onChange={(e) => {
                            setFactura({ ...factura, razSocial: e.target.value });
                            field.onChange(e);
                          }}
                        ></Input>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="p-2">
                <FormField
                  control={form.control}
                  name="direccion"
                  render={({ field }) => (
                    <FormItem className="p-2">
                      <FormLabel>Dirección</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          value={factura.direccion}
                          onChange={(e) => {
                            setFactura({ ...factura, direccion: e.target.value });
                            field.onChange(e);
                          }}
                        ></Input>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div className="p-2">
              <FormField
                control={form.control}
                name="descripcion"
                render={({ field }) => (
                  <FormItem className="p-2">
                    <FormLabel>Descripción</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Escribe Aquí"
                        value={factura.descripcion}
                        onChange={(e) => {
                          setFactura({ ...factura, descripcion: e.target.value });
                          field.onChange(e);
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex flex-row">
              <div className="p-2">
                <FormField
                  control={form.control}
                  name="monto"
                  render={({ field }) => (
                    <FormItem className="p-2">
                      <FormLabel>Monto</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          value={factura.monto}
                          onChange={(e) => {
                            setFactura({ ...factura, monto: e.target.value });
                            field.onChange(e);
                          }}
                        ></Input>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="p-2">
                <FormField
                  control={form.control}
                  name="moneda"
                  render={({ field }) => (
                    <FormItem className="p-2">
                      <FormLabel>Moneda</FormLabel>
                      <FormControl>
                        <Select
                          value={factura.moneda}
                          onValueChange={(value) => {
                            handleMonedaChange(value);
                            setFactura({ ...factura, moneda: value });
                            field.onChange(value);
                          }}
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
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="p-2">
                <FormField
                  control={form.control}
                  name="estado"
                  render={({ field }) => (
                    <FormItem className="p-2">
                      <FormLabel>Estado</FormLabel>
                      <FormControl>
                        <Select
                          value={factura.estado}
                          onValueChange={(value) => {
                            handleEstadoChange(value);
                            setFactura({ ...factura, estado: value });
                            field.onChange(value);
                          }}
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
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div className="pt-5 pl-4 pr-4">
              <div className="w-full flex justify-between">
                <Button onClick={handleCloseModal} className="w-1/3">
                  CERRAR
                </Button>
                <Button type="submit" className="w-1/3">
                  AGREGAR
                </Button>
              </div>
            </div>

          </form >
        </Form >
      </div>
    </>
  );
}
export default NewInvoice;
