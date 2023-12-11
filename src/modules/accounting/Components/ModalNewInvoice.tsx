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
import { toast } from "@/hooks/useToast"
import api from "@/services/api"

interface Props {
  factura: Bill;
  setFactura: (factura: Bill) => void;
  modal: boolean;
  alert: string;
  handleCloseModal: () => void;
  handleAddInvoice: () => void;
  handleMonedaChange: (value: string) => void;
  handleEstadoChange: (value: boolean) => void;
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

  const today = new Date();
  const todayFormatted = today.toISOString().split('T')[0]; // Formato YYYY-MM-DD

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
      status: true,
    },
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await api.post("invoices/create", values);

      if (response.status === 201) {
        toast({
          title: "Factura creada exitosamente",
        });
        handleCloseModal();
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
    }
  };

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
            console.log('Valores enviados:', values);
            onSubmit(values);
            handleAddInvoice();
            handleCloseModal();
          })}>
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
                            setFactura({ ...factura, date_of_issue: e.target.value });
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
                            setFactura({ ...factura, business_name: e.target.value });
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
                          setFactura({ ...factura, description: e.target.value });
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
                          value={factura.status ? 'true' : 'false'}
                          onValueChange={(value) => {
                            const statusValue = value === 'true';
                            console.log('statusValue:', statusValue);
                            handleEstadoChange(statusValue);
                            setFactura({ ...factura, status: statusValue });
                            field.onChange(value);
                          }}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Selecciona" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectItem value="true">Pagado</SelectItem>
                              <SelectItem value="false">Pendiente</SelectItem>
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
