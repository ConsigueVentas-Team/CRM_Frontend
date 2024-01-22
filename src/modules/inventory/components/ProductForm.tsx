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

import { Producto } from "@/types/Producto";

import { z } from "zod";


interface Props {
  mode: "create" | "update";
  product?: Producto;
  setIsPending: (value: boolean) => void;
  setProduct?: (products: Producto) => void;
  setIsOpen: (value: boolean) => void;
}

export function ProductForm({
  mode,
  setIsPending,
  setProduct,
  setIsOpen,
  product,
}: Props) {

  const form = useForm<z.infer<typeof ProductoSchema>>({
    resolver: zodResolver(ProductoSchema),
    defaultValues:
      mode === "update"
        ? {
            nombre: product?.nombre,
            precio: product?.precio,
            categoria: product?.categoria,
            descripcion: product?.descripcion,
            cantidad: product?.cantidad,
            imagen: product?.imagen,
          }
        : undefined,
  });

  const onSubmit = (values: z.infer<typeof ProductoSchema>) => {
    setIsPending(true);
    setTimeout(() => {
      setIsPending(false);

      if (mode === "create") {
        console.log("creado")
      } else {
        if (setProduct) {
          setProduct({
            ...values,
            id: 1,
          });
        }
      }

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
      </form>
    </Form>
  );
}
