import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ProductoSchema } from "@/lib/validators/product";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Producto } from "@/types/Producto";

import { z } from "zod";

interface Props {
  setIsPending: (value: boolean) => void;
  setProducts: (products: Producto) => void;
  setIsOpen: (value: boolean) => void;
}

export function ProductForm({ setIsPending, setProducts, setIsOpen }: Props) {
  const form = useForm<z.infer<typeof ProductoSchema>>({
    resolver: zodResolver(ProductoSchema),
    defaultValues: {
      nombre: "",
      precio: 0,
      categoria: "",
      descripcion: "",
      cantidad: 0,
      imagen: "",
    },
  });

  const onSubmit = (values: z.infer<typeof ProductoSchema>) => {
    setIsPending(true);
    setTimeout(() => {
      setIsPending(false);
      setProducts({
        ...values,
        // Ensure to provide a suitable value
        id: 1, // Ensure to provide a suitable value
      });
      setIsOpen(false);
    }, 2000);
  };

  return (
    <Form {...form}>
      <form
        id="add-product-form"
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-7 w-[97%] p-[0.2rem]"
      >
        <FormField
          control={form.control}
          name="nombre"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Nombre</FormLabel>
              <FormControl>
                <Input placeholder="Nombre" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="precio"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Precio</FormLabel>
              <FormControl>
                <Input type="number" placeholder="Precio" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="categoria"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Categoría</FormLabel>
              <FormControl>
                <Input placeholder="Categoría" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="descripcion"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Descripción</FormLabel>
              <FormControl>
                <Input placeholder="Descripción" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="cantidad"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Cantidad</FormLabel>
              <FormControl>
                <Input type="number" placeholder="Cantidad" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="imagen"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Imagen</FormLabel>
              <FormControl>
                <Input placeholder="URL de la imagen" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Separator />
        {/* Additional form fields if needed */}
      </form>
    </Form>
  );
}
