import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema } from "@/lib/validators/user";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { InputPassword } from "@/components/InputPassword";
import { z } from "zod";
import { ScrollArea } from "@/components/ui/scroll-area";
import api from "@/services/api";
import { toast } from "@/hooks/useToast";
import { useQueryClient } from "react-query";
import Dropzone from "react-dropzone";
import { Circle, MousePointerClick } from "lucide-react";
import { useEffect, useState } from "react";

interface Props {
  setIsPending: (value: boolean) => void;
  setIsOpen: (value: boolean) => void;
}

interface FileWithPreview extends File {
  preview: string;
}


export function UserForm({ setIsPending, setIsOpen }: Props) {
  const {setValue} = useForm();
  const queryClient = useQueryClient();
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      username: "",
      password: "",
      email: "",
      name: "",
      lastname: "",
      document_type: 1,
      document_number: "",
      phone: "",
      address: "",
      role: 1,
      image: null
    },
  });

  //Esto es para poder subir las imagenes de perfil y que tengan un preview

  const [file, setFile] = useState<FileWithPreview | null>(null);
  const [fileError, setFileError] = useState("")

  const handleDrop = (acceptedFiles: File[], field: any) => {
    try {
    const maxSize = 2 * 1024 * 1024
    // Como solo queremos una imagen, solo tomamos el primer archivo
    const firstFile = acceptedFiles[0] as FileWithPreview; // Hacemos un casting a FileWithPreview
    if (firstFile) {
      console.log('First file:', firstFile);
      if (firstFile.size <= maxSize) {
      const previewUrl = URL.createObjectURL(firstFile);
      setFile({ ...firstFile, preview: previewUrl });
      console.log('File with preview:', { ...firstFile, preview: previewUrl })
      field.onChange(firstFile)
    } else {
        console.log(`El archivo "${firstFile.name}" supera el tamaño máximo permitido de 2MB`);
      }
      if (acceptedFiles.length > 0 && !firstFile.type.startsWith('image/')) {
        console.log(`El archivo "${firstFile.name}" no es una imagen.`);
        setFileError('El archivo no es una imagen válida');
        setFile(null);
        //Esto es para que se ponga en rojo el circulo al meter un archivo incorrecto
        const circle =document.getElementById('profile-picture-circle');
        if(circle) {
          circle.classList.add('border-red-500')
          setTimeout(()=> {
            setFileError('');
            circle.classList.remove('border-red-500');
          }, 1500);
        }
      }
    }
  } catch (error) {
    console.error('Error en el manejo del archivo:', error);
  }
  };

  //Este es el dispatch

  const onSubmit = async (values: z.infer<typeof RegisterSchema>) => {
    setIsPending(true);
    try {
  
      const { status } = await api.post("/auth/register", values);
      status >= 400
        ? toast({
          description: "Error al crear usuario",
          variant: "destructive",
        })
        : toast({ description: "Usuario creado correctamente" });
      queryClient.invalidateQueries("users");
      setIsOpen(false);
    } catch (error) {
      toast({
        description: "Error al crear usuario",
        variant: "destructive",
      });
    } finally {
      setIsPending(false);
    }
  };

  useEffect(() => {
    // Make sure to revoke the data uri to avoid memory leaks, will run on unmount
    return () => {
      if (file && file.preview) {
        URL.revokeObjectURL(file.preview);
      }
    };
  }, [file]);

  return (
    <ScrollArea className="max-h-[550px] pl-4">
      <Form {...form}>
        <form
          id="add-user-form"
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-7 w-[96%] p-[0.3rem]"
        >

          <FormField
          control={form.control}
          name="image"
          render={({field}) => (
            
          <FormItem>
          <FormLabel>Foto de Perfil</FormLabel> 
          <div className="w-1/2 flex flex-col h-[195px] w-[42%] relative" >
          <FormControl>
          <Dropzone onDrop={(acceptedFiles => handleDrop(acceptedFiles, field))}>
            {({ getRootProps, getInputProps }) => (
              <section className=" h-full w-[99%]">
                <div
                  {...getRootProps()}
                  className="group h-full relative transition-colors duration-300 bg-background
                  rounded-full text-center flex justify-center items-center overflow-hidden border-dashed hover:border-solid 
                  border-2 border-accent hover:border-primary"
                  id="profile-picture-circle"
                >
                  <div
                    className="absolute top-0 left-0 flex flex-col items-center justify-center gap-4 w-full h-full
                  bg-foreground/30 dark:bg-background/30 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <MousePointerClick className="h-18 w-18 text-white/50" />
                    <p className="text-white/50 px-7">
                      Arrastre y suelte su foto de perfil
                    </p>
                  </div>
                  <input {...getInputProps()}/>
                  {file && file.preview  && (
                    <img
                    src={file.preview}
                    className="w-full h-full object-cover duration-700 ease-in-out"
                  />
                  )}
                </div>
              </section>
            )}
          </Dropzone>
          </FormControl>
          {file && (
            <button
              className="absolute top-1/3 left-56 w-full transform -translate-y-1/5 bg-blue-600 text-white px-6 py-2 rounded-lg"
              onClick={() => setFile(null)}>
              Quitar Imagen
            </button>
          )}
        </div>
        </FormItem>
        )}
        />
        
        
        <FormLabel>
        {fileError && (
              <div className="mt-2 text-red-500 text-sm">{fileError}</div>
            )}
            </FormLabel> 

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
          <div className="flex justify-between gap-4">
            <FormField
              control={form.control}
              name="document_type"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Tipo de documento</FormLabel>
                  <Select
                    onValueChange={(value) => field.onChange(Number(value))}
                    defaultValue="1"
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
                      <SelectItem value="1">DNI</SelectItem>
                      <SelectItem value="2">Cedula</SelectItem>
                      <SelectItem value="3">Pasaporte</SelectItem>
                      <SelectItem value="4">Otros</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="document_number"
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
              name="phone"
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
            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Tipo de usuario</FormLabel>
                  <Select
                    onValueChange={(value) => field.onChange(Number(value))}
                    defaultValue="2"
                  >
                    <FormControl>
                      <SelectTrigger
                        className={`${!field.value && "text-muted-foreground"
                          } hover:text-accent-foreground`}
                      >
                        <SelectValue placeholder="Seleccione un un tipo" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="1">Administrador</SelectItem>
                      <SelectItem value="2">Empleado</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Separator />
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Usuario" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <InputPassword form={form} />
        </form>
      </Form>
    </ScrollArea>
  );
}
