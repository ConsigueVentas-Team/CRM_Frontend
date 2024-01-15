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
import { ScrollArea } from "@/components/ui/scroll-area";
import { z } from "zod";
import { CategoriaSchema } from "@/lib/validators/categoria";

function CLientDataEditable() {
    const form = useForm<z.infer<typeof CategoriaSchema>>({
        resolver: zodResolver(CategoriaSchema),
        defaultValues: {
            nombre: "",
            color: "",

        },
    });

    const onSubmit = () => {
        console.log("data");
    };

    return (
        <ScrollArea className="h-[480px] w-[22rem]">
            <Form {...form}>
                <form
                    id="add-user-form"
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-7 w-[98%] p-[0.4rem]"
                >
                    <div className="flex justify-between gap-4">
                        <FormField
                            control={form.control}
                            name="nombre"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>Nombres</FormLabel>
                                    <FormControl>
                                        <Input disabled placeholder="Nombres" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            name="apellidos"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>Apellidos</FormLabel>
                                    <FormControl>
                                        <Input disabled placeholder="Apellidos" />
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

export default CLientDataEditable;