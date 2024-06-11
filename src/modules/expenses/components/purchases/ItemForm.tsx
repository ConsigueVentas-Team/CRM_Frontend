import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { number, z } from "zod";
import { Item as ItemDetail} from "@/types/purchase";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useEffect, useState } from "react";
import { ItemSchema } from "@/lib/validators/item";

interface Props {
  setIsPending?: (value: boolean) => void;
  setIsOpen?: (value: boolean) => void;
  onAddItem: (item: ItemDetail) => void;
  item?: ItemDetail;
}

export function ItemForm({
  setIsPending = () => {},
  setIsOpen = () => {},
  onAddItem
}: Props) {
  const [error, setError] = useState<string | null>(null);

  
  const form = useForm<z.infer<typeof ItemSchema>>({
    resolver: zodResolver(ItemSchema),
    defaultValues: {
        name: '',
        description: '',
        quantity: 1,
        price: 0,
        total: 0,
    }
});

const { watch, setValue } = form;
  const quantity = watch("quantity");
  const price = watch("price");

  useEffect(() => {
    const total = Number(quantity) * Number(price);
    setValue("total", total);
  }, [quantity, price, setValue]);
  
const onSubmit = async (data: z.infer<typeof ItemSchema>) => {
  setIsPending(true);
  try {
    const processedData = {
      ...data,
      quantity: Number(data.quantity),
      price: Number(data.price),
      total: Number(data.total),
    };
    onAddItem(processedData);
    setIsOpen(false);
  } finally {
    setIsPending(false);
  }
}
    return (
        <ScrollArea className="max-h-[800px] pl-4 pr-4">
          <Form {...form}>
            <form 
                id="add-item-form"
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4 w-[100%] p-[0.2rem]"
              >
              <div className="flex justify-between gap-5">
                <div className="w-1/3">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nombre</FormLabel>
                        <FormControl>
                          <Input placeholder="Nombre" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="w-2/3">
                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Descripcion</FormLabel>
                        <FormControl>
                          <Input placeholder="Descripcion" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className="flex justify-between gap-4">
                <div className="w-1/3">
                    <FormField
                    control={form.control}
                    name="quantity"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Cantidad</FormLabel>
                        <FormControl>
                            <Input placeholder="Cantidad" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                </div>
                <div className="w-1/3">
                    <FormField
                    control={form.control}
                    name="price"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Precio</FormLabel>
                        <FormControl>
                            <Input placeholder="Precio" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                </div>
                <div className="w-1/3">
                <FormField
                  control={form.control}
                  name="total"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Total</FormLabel>
                      <FormControl>
                        <Input placeholder="Total" {...field} readOnly/>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              </div>              
              {error && <div className="text-red-500 mt-2">{error}</div>}
            </form>
          </Form>
        </ScrollArea>
      );
}
