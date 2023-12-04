import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserSchema } from "@/lib/validators/user";
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
import { FormCombobox } from "@/components/FormCombobox";
import { UserDetail } from "@/types/auth";

const cores = [
  {
    label: "Sistema",
    value: 1,
  },
  {
    label: "Administración",
    value: 2,
  },
  {
    label: "Marketing",
    value: 3,
  },
];

const positions = [
  {
    label: "Lider de Sistemas",
    value: 1,
  },
  {
    label: "Backend Python",
    value: 2,
  },
  {
    label: "Frontend React",
    value: 3,
  },
];

interface Props {
  setIsPending: (value: boolean) => void;
  setUsers: (users: UserDetail[]) => void;
  setIsOpen: (value: boolean) => void;
}

export function UserForm({ setIsPending, setUsers, setIsOpen }: Props) {
  const form = useForm<z.infer<typeof UserSchema>>({
    resolver: zodResolver(UserSchema),
    defaultValues: {
      username: "",
      password: "",
      email: "",
      nombre: "",
      apellidos: "",
      position_id: 0,
      core_id: 0,
      departamento_id: 0,
    },
  });

  const onSubmit = (values: z.infer<typeof UserSchema>) => {
    setIsPending(true);
    setTimeout(() => {
      setIsPending(false);
      console.log(values)
      setUsers([
        {
          ...values,
          position_name: "test", // Asegúrate de proporcionar un valor adecuado
          core_name: "test", // Asegúrate de proporcionar un valor adecuado
          department_name: "test", // Asegúrate de proporcionar un valor adecuado
          id: 3 // Asegúrate de proporcionar un valor adecuado
        },
      ]);
      setIsOpen(false);
    }, 2000);
  };

  return (
    <Form {...form}>
      <form
        id="add-user-form"
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 w-full"
      >
        <div className="flex justify-between gap-4">
          <FormField
            control={form.control}
            name="nombre"
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
            name="apellidos"
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
        <div className="flex items-center justify-between gap-4">
          <FormField
            control={form.control}
            name="departamento_id"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Departamento</FormLabel>
                <Select
                  onValueChange={(value) => field.onChange(Number(value))}
                >
                  <FormControl>
                    <SelectTrigger
                      className={`${
                        !field.value && "text-muted-foreground"
                      } hover:text-accent-foreground`}
                    >
                      <SelectValue placeholder="Seleccione un departamento" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="1">Sistemas</SelectItem>
                    <SelectItem value="2">Marketing</SelectItem>
                    <SelectItem value="3">Diseño</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormCombobox
            form={form}
            results={cores}
            name="core_id"
            label="Núcleo"
          />
        </div>
        <FormCombobox
          form={form}
          results={positions}
          name="position_id"
          label="Posición"
        />
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
  );
}
