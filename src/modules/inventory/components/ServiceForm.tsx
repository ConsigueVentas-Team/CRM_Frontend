import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { z } from "zod";
import Dropzone from "react-dropzone";
import api from "@/services/api";
import { toast } from "@/hooks/useToast";
import { ScrollArea } from "@/components/ui/scroll-area";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RootState } from "@/store";

import { useSelector } from "react-redux";
import { Badge } from "@/components/ui/badge";
import { categoryColors } from "@/lib/utils";
import { MousePointerClick } from "lucide-react";
import { useState } from "react";
import { Service } from "@/types/service";
import { ServiceSchema } from "@/lib/validators/service";

interface Props {
  mode: "create" | "update";
  service?: Service;
  setIsPending: (value: boolean) => void;
  setIsOpen: (value: boolean) => void;
}

export function ServiceForm({ mode, setIsPending, setIsOpen, service }: Props) {
  const [draggedImage, setDraggedImage] = useState<string | File>(service?.image || "")
  const { categories } = useSelector((state: RootState) => state.categories);
  const queryClient = useQueryClient();

  const form = useForm<z.infer<typeof ServiceSchema>>({
    resolver: zodResolver(ServiceSchema),
    defaultValues: {
        name: service?.name,
        description: service?.description,
        category:service?.category,
        rate:service?.rate,
        image:service?.image,
        promotion:service?.promotion,
        service_time: service?.service_time
    },
  });

  const onSubmit = async (values: z.infer<typeof ServiceSchema>) => {

    if (!draggedImage) {
      return toast({
        description: "Falta agregar Imagen",
        variant: "destructive",
      });
    }

    setIsPending(true);

    const formData = new FormData();
    formData.append('image', draggedImage)

    Object.keys(values).forEach(key => {
      formData.append(key, values[key]);
    });

    if (mode === "create") {
      api.post("/services/create", formData)
        .then(response => {
          const { status } = response;
          console.log({ res: status });
          if (status >= 400) {
            toast({
              description: "Error al crear Producto",
              variant: "destructive",
            });
          } else {
            toast({ description: "Producto creado correctamente" });
            queryClient.invalidateQueries("products");
          }
        })
        .catch(error => {
          console.error("Error en la solicitud:");
          const { response: { data } } = error
          let message = "";
          for (const key in data) {
            console.log(key + ": " + data[key]);
            message += `${data[key][0]}\n`
          }

          toast({
            description: message,
            variant: "destructive",
          });
          setIsPending(false);
          return
        });
    } else {
      api.patch(`/products/update/${product?.id}`, formData)
        .then(response => {
          const { status, data } = response;
          console.log(data);
          if (status >= 400) {
            toast({
              description: "Error al editar Producto",
              variant: "destructive",
            });
          } else {
            toast({ description: "Producto editado correctamente" });
            queryClient.invalidateQueries("products");
          }
        })
        .catch(error => {
          console.error("Error en la solicitud:", error);
          // Maneja el error de manera adecuada aquí, si es necesario
        });
    }

    setIsPending(false);
    setIsOpen(false);
  };

  const handleImageUpload = (file: File) => setDraggedImage(file)



  return (
    <div className="flex gap-4 ">
      {(
        <div className="w-1/2 flex h-[500px]">
          <Dropzone onDrop={(acceptedFiles) => handleImageUpload(acceptedFiles[0])}>
            {({ getRootProps, getInputProps }) => (
              <section className="h-full w-[99%]">
                <div
                  {...getRootProps()}
                  className="group h-full relative transition-all duration-300 bg-background
                  rounded-sm text-center flex justify-center items-center overflow-hidden"
                >
                  <div
                    className="absolute top-0 left-0 flex flex-col items-center justify-center gap-4 w-full h-full
                  bg-foreground/30 dark:bg-background/30 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <MousePointerClick className="h-20 w-20 text-white/50" />
                    <p className="text-white/50 px-20">
                      Arrastre y suelte algunos archivos aquí o haga clic para
                      seleccionar archivos
                    </p>
                  </div>
                  <input {...getInputProps()} />
                  <img
                    src={typeof draggedImage === 'string' ? draggedImage : URL.createObjectURL(draggedImage)}
                    alt={service?.name}
                    className="w-full h-full object-cover duration-700 ease-in-out"
                  />
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
              id="add-service-form"
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
                name="category"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Categoría</FormLabel>
                    <Select
                      onValueChange={(value) => field.onChange(Number(value))}
                    >
                      <FormControl>
                        <SelectTrigger
                          className={`${!field.value && "text-muted-foreground"
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
                name="promotion"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Promoción</FormLabel>
                    <FormControl>
                      <Input placeholder="select" {...field} onChange={(e) => field.onChange(Number(e.target.value))}/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="rate"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Rating</FormLabel>
                    <FormControl>
                      <Input placeholder="5.2" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="service_time"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>tiempo de servicio</FormLabel>
                    <FormControl>
                      <Input   placeholder="8:00:00" {...field} />
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
