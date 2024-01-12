import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { CategoriaDetail as Categoria } from "@/types/auth";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CategoriaSchema } from "@/lib/validators/categoria";

interface Props {
    setIsPending: (value: boolean) => void;
    setCategoria: (Categoria: Categoria[]) => void;
    setIsOpen: (value: boolean) => void;
}

type CategoriaFormField = "nombre" | "color";

export function CategoriaForm({ setIsPending, setCategoria, setIsOpen }: Props) {
    const form = useForm<z.infer<typeof CategoriaSchema>>({
        resolver: zodResolver(CategoriaSchema),
        defaultValues: {
            nombre: "",
            color: "",
            descripcion: "",
        },
    });

    const onSubmit = (values: z.infer<typeof CategoriaSchema>) => {
        setIsPending(true);
        setTimeout(() => {
            setIsPending(false);
            setCategoria([
                {
                    ...values,
                    id: 3,
                },
            ]);
            setIsOpen(false);
        }, 2000);
    };

    const CircleSelection = ({ fieldName, selectedValue, onSelect }: { fieldName: CategoriaFormField; selectedValue: string; onSelect: (name: CategoriaFormField, value: string) => void }) => {
        const colorMappings = {
            circle1: '#FF0000',  // Rojo
            circle2: '#0000FF',  // Azul
            circle3: '#FFFF00',  // Amarillo
            circle4: '#FFFFFF',  // Blanco
            circle5: '#000000',  // Negro
        };

        return (
            <div className="flex items-center gap-2">
                {Object.entries(colorMappings).map(([circle, color], index) => (
                    <div
                        key={index}
                        style={{
                            backgroundColor: color,
                            width: '20px',
                            height: '20px',
                            borderRadius: '50%',  // Hacer que los cuadrados sean círculos
                            cursor: 'pointer',
                            border: `2px solid ${selectedValue === circle ? 'blue' : 'transparent'}`,
                        }}
                        onClick={() => onSelect(fieldName, color)}
                    />
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
                        <FormField
                            control={form.control}
                            name="nombre"
                            render={({ field }) => (
                                <FormItem className="w-1/2">
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
                            name="color"
                            render={({ field }) => (
                                <FormItem className="w-1/2">
                                    <FormLabel>Color</FormLabel>
                                    <FormControl>
                                        <Input placeholder="color" {...field} readOnly />
                                    </FormControl>
                                    <CircleSelection
                                        fieldName="color"
                                        selectedValue={form.getValues('color')}
                                        onSelect={(name, value) => form.setValue(name, value)}
                                    />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="flex justify-between gap-4">
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
