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
import { toast } from "@/hooks/useToast";
import api from "@/services/api";
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

  const today = new Date();
  const todayFormatted = today.toISOString().split("T")[0]; // Formato YYYY-MM-DD

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      date_of_issue: todayFormatted,
      serie: "",
      number: "",
      ruc: "",
      business_name: "",
      address: "",
      description: "",
      amount: "",
      money: "PEN",
      status: "PENDIENTE",
    },
  });

  const handleMonedaChange = (value: string) => {
    setFactura({ ...factura, money: value });
  };

  const handleEstadoChange = (value: string) => {
    setFactura({ ...factura, status: value });
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsPending(true);
    try {
      const response = await api.post("invoices/create", values);

      if (response.status === 201) {
        toast({
          title: "Factura creada exitosamente",
        });
      } else {
        toast({
          title: "Error al crear la factura",
          variant: "destructive",
        });
      }
    } catch (error: any) {
      toast({
        title: "Error al crear la factura",
        variant: "destructive",
      });
    } finally {
      setIsPending(false);
      setOpen(false);
    }
  };

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;
  const lastDayOfMonth = new Date(currentYear, currentMonth, 0).getDate();

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
                  name="date_of_issue"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Fecha de Emisión</FormLabel>
                      <FormControl>
                        <Input
                          type="date"
                          value={factura.date_of_issue}
                          onChange={(e) => {
                            setFactura({
                              ...factura,
                              date_of_issue: e.target.value,
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
                  name="number"
                  render={({ field }) => (
                    <FormItem className="p-2">
                      <FormLabel>Número</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          value={factura.number}
                          onChange={(e) => {
                            setFactura({ ...factura, number: e.target.value });
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
                  name="business_name"
                  render={({ field }) => (
                    <FormItem className="p-2">
                      <FormLabel>Razón Social</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          value={factura.business_name}
                          onChange={(e) => {
                            setFactura({
                              ...factura,
                              business_name: e.target.value,
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
                  name="address"
                  render={({ field }) => (
                    <FormItem className="p-2">
                      <FormLabel>Dirección</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          value={factura.address}
                          onChange={(e) => {
                            setFactura({ ...factura, address: e.target.value });
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
                name="description"
                render={({ field }) => (
                  <FormItem className="p-2">
                    <FormLabel>Descripción</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Escribe Aquí"
                        value={factura.description}
                        onChange={(e) => {
                          setFactura({
                            ...factura,
                            description: e.target.value,
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
                  name="amount"
                  render={({ field }) => (
                    <FormItem className="p-2">
                      <FormLabel>Monto</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          value={factura.amount}
                          onChange={(e) => {
                            setFactura({ ...factura, amount: e.target.value });
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
                  name="money"
                  render={({ field }) => (
                    <FormItem className="p-2">
                      <FormLabel>Moneda</FormLabel>
                      <FormControl>
                        <Select
                          value={factura.money}
                          onValueChange={(value) => {
                            handleMonedaChange(value);
                            setFactura({ ...factura, money: value });
                            field.onChange(value);
                          }}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Selecciona" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectItem value="PEN">Soles</SelectItem>
                              <SelectItem value="USD">Dolares</SelectItem>
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
                  name="status"
                  render={({ field }) => (
                    <FormItem className="p-2">
                      <FormLabel>Estado</FormLabel>
                      <FormControl>
                        <Select
                          value={factura.status}
                          onValueChange={(value) => {
                            handleEstadoChange(value);
                            setFactura({ ...factura, status: value });
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
