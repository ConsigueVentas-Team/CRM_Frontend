import { useForm} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem,FormLabel,FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { number, z } from "zod";
import { Purchase, Purchase as PurchaseDetail } from "@/types/purchase";
import { ScrollArea } from "@/components/ui/scroll-area";
import { PurchaseSchema } from "@/lib/validators/purchase";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface Props {
  setIsPending?: (value: boolean) => void;
  setCategoria?: (purchase: Purchase[]) => void;
  setIsOpen?: (value: boolean) => void;
  purchase?: PurchaseDetail;
}

export function PurchaseForm({
  setIsPending = () => {},
  setIsOpen = () => {},
}: Props) {
  const [error, setError] = useState<string | null>(null);

  const  form = useForm<z.infer<typeof PurchaseSchema>>({
    resolver: zodResolver(PurchaseSchema),
    defaultValues: {
        provider_id: 0,
        date_purchase: new Date(),
        number_bill: "",
        total: 0,
        status: "",
        provider: {
            id: 0,
            person_contact: "",
            phone: "",
            email: "",
            address: "",
            notes: "",
            created_at: new Date(),
            updated_at: new Date()
        },
        payments: []
    },
});

    return (
        <ScrollArea className="max-h-[800px] pl-4">
          <Form {...form}>
            <form id="add-user-form" className="space-y-7 w-[97%] p-[0.2rem]">
              <div className="flex justify-between gap-4">
                <div className="w-1/2">
                  <FormField
                    control={form.control}
                    name="provider.person_contact"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nombre del proveedor</FormLabel>
                        <FormControl>
                          <Input placeholder="Nombre del proveedor" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="w-1/2">
                  <FormField
                    control={form.control}
                    name="provider.person_contact"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Persona de contacto</FormLabel>
                        <FormControl>
                          <Input placeholder="Persona de contacto" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className="flex justify-between gap-4">
              <div className="w-1/2">
                <FormField
                  control={form.control}
                  name="provider.phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Teléfono</FormLabel>
                      <FormControl>
                        <Input placeholder="Teléfono" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="w-1/2">
                <FormField
                  control={form.control}
                  name="provider.email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Correo electrónico</FormLabel>
                      <FormControl>
                        <Input placeholder="Correo electrónico" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              </div>
              <div className="flex justify-center">
                <FormField
                  control={form.control}
                  name="total"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Total</FormLabel>
                      <FormControl>
                        <Input placeholder="Total" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              {error && <div className="text-red-500 mt-2">{error}</div>}
            </form>
            <div>
          <Button className="bg-primary font-bold mt-4 right-1 rounded">
            Guardar
          </Button>
      </div>
    </Form>
  </ScrollArea>
  );
}
