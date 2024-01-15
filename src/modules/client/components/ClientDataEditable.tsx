import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ClientSchema } from "@/lib/validators/client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { z } from "zod";

function CLientDataEditable() {
  const form = useForm<z.infer<typeof ClientSchema>>({
    resolver: zodResolver(ClientSchema),
    defaultValues: {
      nombre: "",
      apellidos: "",
      doc_id: 0,
      num_identification: "",
      address: "",
      cellphone: "",
      email: "",
    },
  });

  const onSubmit = () => {
    console.log("data");
  };

  return (
    <ScrollArea className="h-[330px] w-[22rem]">
      <Form {...form}>
        <form
          id="add-user-form"
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-7 w-[98%] p-[0.4rem]"
        >
          <div className="flex justify-between gap-4">
            <FormField
              control={form.control}
              name="nombre"
              render={() => (
                <FormItem className="w-full">
                  <FormLabel>Nombres</FormLabel>
                  <FormControl>
                    <Input disabled placeholder="Nombres" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="apellidos"
              render={() => (
                <FormItem className="w-full">
                  <FormLabel>Apellidos</FormLabel>
                  <FormControl>
                    <Input disabled placeholder="Apellidos" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
              name="num_identification"
              render={() => (
                <FormItem className="w-full">
                  <FormLabel>Nº identificación</FormLabel>
                  <FormControl>
                    <Input disabled placeholder="documento" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          <FormField
            name="email"
            render={() => (
              <FormItem className="w-full">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input disabled placeholder="Email" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="address"
            render={() => (
              <FormItem className="w-full">
                <FormLabel>Direccion</FormLabel>
                <FormControl>
                  <Input disabled placeholder="Dirección" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-between gap-4">
            <FormField
              control={form.control}
              name="cellphone"
              render={() => (
                <FormItem className="w-full">
                  <FormLabel>Telefono</FormLabel>
                  <FormControl>
                    <Input
                      disabled
                      type="text"
                      pattern="^\d{1,9}$"
                      placeholder="Numero de celular"
                      onInput={(e) =>
                        (e.currentTarget.value = e.currentTarget.value.replace(
                          /[^\d]/g,
                          ""
                        ))
                      }
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

export default CLientDataEditable;
