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
import { useQueryClient } from "react-query";
import { Product } from "@/types/product";
import { z } from "zod";
import Dropzone from "react-dropzone";
import api from "@/services/api";
import { toast } from "@/hooks/useToast";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RootState, useAppDispatch } from "@/store";
import { getCategories } from "@/store/categories/thunk";
import { useSelector } from "react-redux";
import { Badge } from "@/components/ui/badge";
import { categoryColors } from "@/lib/utils";
import { MousePointerClick } from "lucide-react";

interface Props {
  mode: "create" | "update";
  product?: Product;
  setIsPending: (value: boolean) => void;
  setIsOpen: (value: boolean) => void;
}

export function ProductForm({ mode, setIsPending, setIsOpen, product }: Props) {
  const { categories } = useSelector((state: RootState) => state.categories);
  const queryClient = useQueryClient();
  const dispatch = useAppDispatch();

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

    if (mode === "create") {
      const { status } = await api.post("/products/create", values);

      status >= 400
        ? toast({
            description: "Error al crear Producto",
            variant: "destructive",
          })
        : toast({ description: "Producto creado correctamente" }) &&
          queryClient.invalidateQueries("productos");
    } else {
      const { status } = await api.patch(
        `/products/update/${product?.id}`,
        values
      );
      status >= 400
        ? toast({
            description: "Error al editar Producto",
            variant: "destructive",
          })
        : toast({ description: "Producto editado correctamente" }) &&
          queryClient.invalidateQueries("productos");
    }
    setIsPending(false);
    setIsOpen(false);
  };

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <div className="flex gap-4 ">
      {product?.image_url && (
        <div className="w-1/2 flex h-[500px]">
          <Dropzone onDrop={(acceptedFiles) => console.log(acceptedFiles)}>
            {({ getRootProps, getInputProps }) => (
              <section className="h-full w-[99%]">
                <div
                  {...getRootProps()}
                  className="group h-full relative transition-all duration-300 bg-background
                  rounded-sm text-center flex justify-center items-center overflow-hidden"
                >
                  <div className="absolute top-0 left-0 flex flex-col items-center justify-center gap-4 w-full h-full
                  bg-foreground/30 dark:bg-background/30 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                    <MousePointerClick className="h-20 w-20 text-white/50" />
                    <p className="text-white/50 px-20">
                      Arrastre y suelte algunos archivos aquí o haga clic para
                      seleccionar archivos
                    </p>
                  </div>
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
                  className="transition-colors duration-300 bg-background border-dashed hover:border-solid border-2 border-accent hover:border-primary
                  rounded-sm h-full text-center flex justify-center items-center"
                >
                  <input {...getInputProps()} />
                  <div className="flex flex-col items-center gap-4">
                    <MousePointerClick className="h-20 w-20 text-accent" />
                    <p className="text-gray-500 dark:text-gray-700 px-20">
                      Arrastre y suelte algunos archivos aquí o haga clic para
                      seleccionar archivos
                    </p>
                  </div>
                </div>
              </section>
            )}
          </Dropzone>
        </div>
      )}
      <div className="w-1/2 ">
        <ScrollArea className="h-[500px] w-full">
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
                name="category"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Categoría</FormLabel>
                    <Select
                      onValueChange={(value) => field.onChange(Number(value))}
                    >
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
                        {categories.map((category) => (
                          <SelectItem
                            key={category.id}
                            value={category.id.toString()}
                          >
                            <Badge
                              className={`${categoryColors[category.color]}`}
                            >
                              {category.name}
                            </Badge>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
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
    </div>
  );
}
