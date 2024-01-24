import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/useToast";
import { ClientSchema } from "@/lib/validators/client";
import api from "@/services/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

interface Props {
  setIsPending: (value: boolean) => void;
  setIsOpen: (value: boolean) => void;
}

export function ClientForm({ setIsPending, setIsOpen }: Props) {
  const form = useForm<z.infer<typeof ClientSchema>>({
    resolver: zodResolver(ClientSchema),
    defaultValues: {
      name: "",
      lastname: "",
      documentType: -1,
      documentNumber: "",
      address: "",
      cellNumber: "",
      email: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof ClientSchema>) => {
    setIsPending(true);
    try {
      const result = await api.post("/clients/create", values);
      if (result.status >= 400) {
        toast({
          description: "Error al crear nuevo cliente",
          variant: "destructive",
        });
      } else {
        toast({
          description: "Cliente creado correctamente",
        });     
        setIsOpen(false);
      }
    } catch (error) {
      toast({
        description: "Error al crear nuevo cliente",
        variant: "destructive",
      });
    } finally {
      setIsPending(false);
    }
  };

  return (
    <ScrollArea className="max-h-[550px] pl-4">
      <Form {...form}>
        <form id="add-user-form" onSubmit={form.handleSubmit(onSubmit)} className="space-y-7 w-[97%] p-[0.2rem]">
          <div className="flex justify-between gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Nombres</FormLabel>
                  <FormControl>
                    <Input placeholder="Nombres" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastname"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Apellidos</FormLabel>
                  <FormControl>
                    <Input placeholder="Apellidos" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex justify-between gap-4">
            <FormField
              control={form.control}
              name="documentType"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Doc identificación</FormLabel>
                  <Select onValueChange={ value => field.onChange(Number(value)) }>
                    <FormControl>
                      <SelectTrigger
                        className={`${
                          !field.value && "text-muted-foreground"
                        } hover:text-accent-foreground`}
                      >
                        <SelectValue placeholder="Seleccione un tipo" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="0">DNI</SelectItem>
                      <SelectItem value="1">Cedula</SelectItem>
                      <SelectItem value="2">Pasaporte</SelectItem>
                      <SelectItem value="3">Otro</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="documentNumber"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Nº identificación</FormLabel>
                  <FormControl>
                    <Input placeholder="número de documento" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Dirección</FormLabel>
                <FormControl>
                  <Input placeholder="Dirección" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-between gap-4">
            <FormField
              control={form.control}
              name="cellNumber"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Numero</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      pattern="^\d{1,9}$"
                      placeholder="Numero de celular"
                      onInput={(e) =>
                        (e.currentTarget.value = e.currentTarget.value.replace(
                          /[^\d]/g,
                          ""
                        ))
                      }
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </form>
      </Form>
    </ScrollArea>
  );
}