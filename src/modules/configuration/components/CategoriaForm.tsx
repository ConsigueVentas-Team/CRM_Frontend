import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { CategoriaDetail as Categoria, CategoriaDetail } from "@/types/auth";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CategoriaSchema } from "@/lib/validators/categoria";
import axios from "axios";


interface Props {
    setIsPending: (value: boolean) => void;
    setCategoria: (categorias: CategoriaDetail[]) => void;
    setIsOpen: (value: boolean) => void;
}

type CategoriaFormField = "name" | "color";


export function CategoriaForm({ setIsPending, setCategoria, setIsOpen }: Props) {
    const form = useForm<z.infer<typeof CategoriaSchema>>({
        resolver: zodResolver(CategoriaSchema),
        defaultValues: {
            name: "",
            color: "",
            descripcion: "",
        },
    });


    const onSubmit = async (values: z.infer<typeof CategoriaSchema>) => {
        setIsPending(true);
        try {
          
            const response = await axios.post('http://localhost:8080/categorias/crear', values);

           
            if (response.status === 201) {
                
                setCategoria([response.data]);
                setIsOpen(false);
            } else {
                
                console.error('Error al crear la categoría. Estado de respuesta:', response.status);
            }
        } catch (error: any) {
            
            if (error.response) {
                
                console.error('Error en la respuesta del servidor:', error.response.data);
            } else if (error.request) {
                
                console.error('No se recibió respuesta del servidor:', error.request);
            } else {
                
                console.error('Error durante la configuración de la solicitud:', error.message);
            }
        } finally {
            setIsPending(false);
        }
    };

    const generateBadges = () => {
        const { name } = form.getValues();
    
        const badgeData = [
            { color: 'bg-blue-50 text-blue-700 ring-blue-700/10', label: 'Azul' },
            { color: 'bg-gray-50 text-gray-600 ring-gray-500/10', label: 'Gris' },
            { color: 'bg-green-50 text-green-700 ring-green-600/20', label: 'Verde' },
            { color: 'bg-red-50 text-red-700 ring-red-600/10', label: 'Rojo' },
            { color: 'bg-yellow-50 text-yellow-800 ring-yellow-600/20', label: 'Amarillo' },
        ];
    
        return (
            <div className="badge-container flex justify-center flex-wrap mt-8">
                {badgeData.map((badge, index) => (
                    <span
                        key={index}
                        className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium m-1 ${badge.color}`}
                        onClick={() => {
                            form.setValue('color', badge.label);
                        }}
                    >
                        {name}
                    </span>
                ))}
            </div>
        );
    };


    return (
        <ScrollArea className="max-h-[550px] pl-4">
            <Form {...form}>
                <form
                    id="add-user-form"
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-7 w-[97%] p-[0.2rem]"
                >
                    <div className="flex justify-between gap-4">
                        <div className="w-1/2">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Nombres</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Nombres"
                                                {...field}
                                                onChange={(e) => {
                                                    field.onChange(e);
                                                    
                                                    form.setValue('name', e.target.value);
                                                }}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="w-1/2">
                            <FormField
                                control={form.control}
                                name="color"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Color</FormLabel>
                                        <FormControl>
                                            <Input placeholder="color" {...field} readOnly />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                        </div>
                    </div>
                    <div className="flex justify-center">
                        {generateBadges()}
                    </div>
                    <div className="flex justify-center">
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
                    </div>
                </form>
            </Form>
        </ScrollArea>
    );
}