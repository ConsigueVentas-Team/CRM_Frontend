import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { CategoriaDetail, CategoriaDetail as CategoriaDetailType } from "@/types/auth";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CategoriaSchema } from "@/lib/validators/categoria";
import axios from "axios";
import { useState } from "react";
import { useTheme } from "@/contexts/theme";
import api from "@/services/api";
import { fetchCategorias } from "../api/apiService";


interface Props {

    categoria: CategoriaDetailType;
}

type CategoriaFormField = "name" | "color";


export function CategoriaEdit({
    categoria

}: Props) {
    const [editedName, setEditedName] = useState(categoria.name);
    const [editedDescription, setEditedDescription] = useState(categoria.description);

    const [selectedColorIndex, setSelectedColorIndex] = useState<number>(categoria.color);
    const colors = ['bg-blue-500', 'bg-green-500', 'bg-red-500', 'bg-yellow-500'];

    const form = useForm<z.infer<typeof CategoriaSchema>>({
        resolver: zodResolver(CategoriaSchema),
        defaultValues: {
            name: "",
            color: -1,
            description: "",
        },
    });

    const selectColor = (colorIndex: number) => {
        form.setValue('color', colorIndex); // Establece el índice del color
        setSelectedColorIndex(colorIndex);
    };

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditedName(e.target.value);
    };

    const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditedDescription(e.target.value);
    };

    const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedColorIndex(Number(e.target.value));
    };

    const onEditCategoria = async () => {

        try {
            const requestBody = {
                name: editedName,
                description: editedDescription,
                color: selectedColorIndex,
            };
            const response = await api.put(`categories/update/${categoria.id}`, requestBody);
            if (response.status === 200) {
                console.log('Categoría actualizada exitosamente.');
            } else {
                console.error('Error al actualizar la categoría. Estado de respuesta:', response.status);
            }
        } catch (error) {
            console.error('Error al intentar actualizar la categoría:', error);
        }
    };

    const renderColorCircles = () => {
        const { theme } = useTheme();

        return (
            <div className="flex items-center mt-4 flex-col">
                <p className="text-center font-bold mb-2">Selecciona el color</p>
                <div className="flex">
                    {colors.map((color, index) => (
                        <div
                            key={index}
                            className={`relative w-6 h-6 rounded-full mx-2 cursor-pointer ${color} ${selectedColorIndex === index ? 'ring-2' : ''
                                } ${theme === 'light' && selectedColorIndex === index ? 'ring-black' : 'ring-white'
                                }`}
                            onClick={() => selectColor(index)}
                        >
                            {selectedColorIndex === index && (
                                <svg
                                    className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white ${theme === 'light' ? 'text-black' : ''
                                        }`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    width="12"
                                    height="12"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        );
    };
    const hideColorField = true;







    return (

        <ScrollArea className="max-h-[550px] pl-4">
            <Form {...form}>
                <form
                    id="add-user-form"
                    onSubmit={onEditCategoria}
                    className="space-y-7 w-[97%] p-[0.2rem]"
                >
                    <div className="flex justify-center">
                        {/* Renderiza un solo badge con el color seleccionado */}
                        <span
                            className={`inline-flex items-center rounded-md px-3 py-1 text-sm font-medium m-2 border border-gray-300 ${selectedColorIndex !== -1 ? colors[selectedColorIndex] : ''
                                } `}
                        >
                            {form.getValues('name')}
                        </span>
                    </div>
                    <div className="flex justify-center">
                        {renderColorCircles()}
                    </div>
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
                                                value={editedName}
                                                onChange={handleNameChange}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        {hideColorField ? null : (

                            <div className="w-1/2">
                                <FormField
                                    control={form.control}
                                    name="color"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Color</FormLabel>
                                            <FormControl>
                                                <Input placeholder="color" value={selectedColorIndex} readOnly />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                            </div>
                        )}

                    </div>

                    <div className="flex justify-center">
                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>Descripción</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Descripción" value={editedDescription} onChange={handleDescriptionChange} />
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