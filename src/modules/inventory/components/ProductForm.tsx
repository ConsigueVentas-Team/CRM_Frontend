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

import Dropzone from "react-dropzone";

import api from "@/services/api";
import { toast } from "@/hooks/useToast";
import { ScrollArea } from "@/components/ui/scroll-area";

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
    defaultValues: {
      name: product?.name,
      description: product?.description,
      price: product?.price,
      stock: product?.stock,
      security_stock: product?.security_stock,
      barcode: product?.barcode,
      state: product?.state,
      category: product?.category,
      image_url: product?.image_url,
    },
  });

  const onSubmit = async (values: z.infer<typeof ProductoSchema>) => {
    setIsPending(true);
    setTimeout(async () => {
      setIsPending(false);

      if (mode === "create") {
        const { status } = await api.post("/products/create", values);

        status >= 400
          ? toast({
              description: "Error al crear Producto",
              variant: "destructive",
            })
          : toast({ description: "Producto creado correctamente" });
      } else {
        if (setProduct) {
          const { status } = await api.patch(
            `/products/update/${product?.id}`,
            values
          );
          console.log(values);
          status >= 400
            ? toast({
                description: "Error al crear Producto",
                variant: "destructive",
              })
            : toast({ description: "Producto creado correctamente" });
        }
      }

      setIsOpen(false);
    }, 2000);
  };

  return (
    <div className="flex gap-4 h-[60vh]">
      {product?.image_url && (
        <div className="w-1/2 flex ">
          <Dropzone onDrop={(acceptedFiles) => console.log(acceptedFiles)}>
            {({ getRootProps, getInputProps }) => (
              <section className=" h-full">
                <div
                  {...getRootProps()}
                  className="bg-gray-100 border-dashed border-4 border-gray-400 rounded-sm  h-full text-center flex justify-center items-center"
                >
                  <input {...getInputProps()} />
                  <img
                    src={product?.image_url}
                    alt={product?.name}
                    className="w-full h-full object-cover duration-700 ease-in-out"
                  />
                </div>
              </section>
            )}
          </Dropzone>
        </div>
      )}
      {!product?.image_url && (
        <div className="w-1/2">
          <Dropzone onDrop={(acceptedFiles) => console.log(acceptedFiles)}>
            {({ getRootProps, getInputProps }) => (
              <section className=" h-full">
                <div
                  {...getRootProps()}
                  className="bg-gray-100 border-dashed border-4 border-gray-400 rounded-sm  h-full px-24 text-center flex justify-center items-center"
                >
                  <input {...getInputProps()} />
                  <p className="text-gray-700">
                    Arrastre y suelte algunos archivos aquí o haga clic para
                    seleccionar archivos
                  </p>
                </div>
              </section>
            )}
          </Dropzone>
        </div>
      )}

      <ScrollArea className="h-full w-1/2 rounded-md border p-4">
        <Form {...form}>
          <form
            id="add-product-form"
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-7 w-[97%] p-[0.2rem]"
          >
            <FormField
              control={form.control}
              name="name"
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
              name="description"
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
              name="price"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Precio</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      inputMode="numeric"
                      placeholder="Precio"
                      {...field}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="stock"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Cantidad</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      inputMode="numeric"
                      placeholder="Cantidad"
                      {...field}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="security_stock"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Cantidad de seguridad</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      inputMode="numeric"
                      placeholder="Cantidad de seguridad"
                      {...field}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="barcode"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>barcode</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="barcode" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="state"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>state</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      inputMode="numeric"
                      placeholder="state"
                      {...field}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Categoría</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      inputMode="numeric"
                      placeholder="Categoría"
                      {...field}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="image_url"
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
      </ScrollArea>
    </div>
  );
}
