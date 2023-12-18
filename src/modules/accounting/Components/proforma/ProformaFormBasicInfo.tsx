import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAuth } from "@/hooks/useAuth";
import { useState } from "react";
import CompanySelectField from "../CompanySelectField";

const type = [
  {
    id: 1,
    name: "Basica",
  },
  {
    id: 2,
    name: "Intermedia",
  },
  {
    id: 3,
    name: "Avanzada",
  },
];

export function ProformaFormBasicInfo({ form }: any) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const { user } = useAuth();

  return (
    <div className="border rounded-lg p-4">
      <p className="font-bold mb-4">Información básica</p>
      <div className="flex flex-col gap-8 p-4">
        <div className="flex w-[35%] absolute right-[5rem] xl:right-[9.5rem] top-[1rem]">
          <div className="p-2 w-[50%] mb-8">
            <FormField
              control={form.control}
              name="invoice_number"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="bg-muted"
                      disabled
                      type="text"
                      value="001"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="p-2 w-[50%] mb-8">
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="bg-muted"
                      disabled
                      type="text"
                      value={new Date().toLocaleDateString()}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="w-full lg:w-[50%]">
          <FormField
            control={form.control}
            name="reference"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Referencia</FormLabel>
                <FormControl>
                  <Input type="text" className="uppercase" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <FormField
              control={form.control}
              name="prepared_by"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Elaborado por</FormLabel>
                  <FormControl>
                    <Input
                      className="bg-muted"
                      value={user ? user?.nombre : ""}
                      disabled
                      type="text"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div>
            <FormField
              control={form.control}
              name="approved_by"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Aprobado por</FormLabel>
                  <FormControl>
                    <Input
                      className="bg-muted"
                      disabled
                      type="text"
                      value="Jhoel Fernández A."
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Correo</FormLabel>
                  <FormControl>
                    <Input type="text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div>
            <FormField
              control={form.control}
              name="phone_number"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Telefono</FormLabel>
                  <FormControl>
                    <Input type="text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 w-full lg:w-[75%] relative gap-8">
          <div>
            <CompanySelectField form={form} />
          </div>
          <div>
            <FormField
              control={form.control}
              name="required_by"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Requerido por</FormLabel>
                  <FormControl>
                    <Input type="text" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div>
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem className="">
                  <FormLabel>Tipo de proforma</FormLabel>
                  <Select>
                    <SelectTrigger className="text-start border border-bg-muted-foreground p-[0.6rem] px-4 text-sm font-medium rounded w-full">
                      <SelectValue placeholder="Selecciona un tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {type.map((item) => (
                          <SelectItem value={item.name} key={item.id}>
                            {item.name}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
