import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bill } from "@/types/bill";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import formSchema from "../../../lib/validators/accounting";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Loader2, PlusCircle } from "lucide-react";
import { DialogClose } from "@radix-ui/react-dialog";
import { useState } from "react";
import { INITIAL_STATE } from "../pages/Invoice";
interface Props {
  factura: Bill;
  setFactura: (factura: Bill) => void;
  facturas: Bill[];
  setFacturas: (facturas: Bill[]) => void;
}

export function NewInvoice({
  factura,
  setFactura,
  facturas,
  setFacturas,
}: Props) {
  const [open, setOpen] = useState(false);
  const [isPending, setIsPending] = useState(false);
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
  });
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;
  const lastDayOfMonth = new Date(currentYear, currentMonth, 0).getDate();

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setIsPending(true);
    setTimeout(() => {
      setFacturas([...facturas, values]);
      setFactura(INITIAL_STATE);
      setIsPending(false);
      setOpen(false);
    }, 1000);
  };

  const handleMonedaChange = (value: string) => {
    setFactura({ ...factura, moneda: value });
  };

  const handleEstadoChange = (value: string) => {
    setFactura({ ...factura, estado: value });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="p-5 mr-5 shadow-lg">
          <PlusCircle className="mr-2" /> Nueva Factura
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Nueva Factura</DialogTitle>
          <DialogDescription>
            En este formulario puedes agregar una nueva factura
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
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
                            setFactura({
                              ...factura,
                              fechaEmision: e.target.value,
                            });
                            field.onChange(e);
                          }}
                          min={`${currentYear}-${currentMonth
                            .toString()
                            .padStart(2, "0")}-01`}
                          max={`${currentYear}-${currentMonth
                            .toString()
                            .padStart(2, "0")}-${lastDayOfMonth}`}
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
                            setFactura({
                              ...factura,
                              razSocial: e.target.value,
                            });
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
                            setFactura({
                              ...factura,
                              direccion: e.target.value,
                            });
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
                          setFactura({
                            ...factura,
                            descripcion: e.target.value,
                          });
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
                              <SelectItem value="PENDIENTE">
                                Pendiente
                              </SelectItem>
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
              <div className="flex justify-between gap-4">
                <DialogClose asChild>
                  <Button type="button" variant="outline" className="w-full">
                    Cerrar
                  </Button>
                </DialogClose>
                <Button type="submit" className="w-full" disabled={isPending}>
                  {isPending && (
                    <Loader2
                      className="mr-2 h-4 w-4 animate-spin"
                      aria-hidden="true"
                    />
                  )}
                  Agregar
                </Button>
              </div>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
