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
import { ScrollArea } from "@/components/ui/scroll-area";
import { z } from "zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { User } from "@/types/auth";
import { toast } from "@/hooks/useToast";
import api from "@/services/api";

interface Props {
  edit: boolean;
  user: User | null;
  setIsPending: (value: boolean) => void;
  upadteForm: any;
}

function UserEditForm({ edit, user, setIsPending, upadteForm }: Props) {
  const type = user?.document_type;
  const getDocumentType =
    type == 0
      ? "DNI"
      : type == 1
      ? "Cedula"
      : type == 2
      ? "Pasaporte"
      : type == 3
      ? "Otros"
      : "";

  const onSubmit = async (values: z.infer<typeof UserSchema>) => {
    setIsPending(true);
    try {
      const { status } = await api.patch(`/users/update/${user?.id}`, values);
      status === 200
        ? toast({ title: "Usuario editado" })
        : toast({ title: "Error al editar", variant: "destructive" });
    } catch (error) {
      toast({ title: "Error al editar usuario", variant: "destructive" });
    } finally {
      setIsPending(false);
    }
  };

  return (
    <ScrollArea className="h-[500px] w-[460px]">
      <Form {...upadteForm}>
        <form
          id="update-user-form"
          onSubmit={upadteForm.handleSubmit(onSubmit)}
          className="space-y-7 w-[98%] p-[0.4rem] pb-20"
        >
          <div className="flex justify-between gap-4">
            <FormField
              control={upadteForm.control}
              name="name"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Nombres</FormLabel>
                  <FormControl>
                    <Input {...field} disabled={edit} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="lastname"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Apellidos</FormLabel>
                  <FormControl>
                    <Input {...field} disabled={edit} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input {...field} disabled={edit} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-between gap-4">
            <FormField
              control={upadteForm.control}
              name="document_type"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Tipo de documento</FormLabel>
                  <Select
                    onValueChange={(value) => field.onChange(Number(value))}
                    disabled={edit}
                  >
                    <FormControl>
                      <SelectTrigger
                        className={`${
                          !field.value && "text-muted-foreground"
                        } hover:text-accent-foreground`}
                      >
                        <SelectValue placeholder={getDocumentType} />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="0">DNI</SelectItem>
                      <SelectItem value="1">Cedula</SelectItem>
                      <SelectItem value="2">Pasaporte</SelectItem>
                      <SelectItem value="3">Otros</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="document_number"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Nº identificación</FormLabel>
                  <FormControl>
                    <Input {...field} disabled={edit} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={upadteForm.control}
            name="address"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Direccion</FormLabel>
                <FormControl>
                  <Input {...field} disabled={edit} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-between gap-4">
            <FormField
              control={upadteForm.control}
              name="phone"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Numero</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={edit}
                      type="text"
                      pattern="^\d{1,9}$"
                      onInput={(e) =>
                        (e.currentTarget.value = e.currentTarget.value.replace(
                          /[^\d]/g,
                          ""
                        ))
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={upadteForm.control}
              name="role_name"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Tipo de usuario</FormLabel>
                  <Select
                    onValueChange={(value) => field.onChange(Number(value))}
                    disabled={edit}
                  >
                    <FormControl>
                      <SelectTrigger
                        className={`${
                          !field.value && "text-muted-foreground"
                        } hover:text-accent-foreground`}
                      >
                        <SelectValue placeholder={user?.role_name} />
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
            control={upadteForm.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input {...field} disabled={edit} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </ScrollArea>
  );
}

export default UserEditForm;
