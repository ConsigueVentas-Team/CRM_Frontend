import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ProformaScheme } from "@/lib/validators/proforma";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ProformaFormTabs } from "./ProformaFormTabs";
import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Check, ChevronsUpDown } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";
import { SelectTrigger } from "@radix-ui/react-select";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { useAuth } from "@/hooks/useAuth";
import { Separator } from "@/components/ui/separator";

export function ProformaForm() {
  // const [dataTable, setDataTable] = useState([]);
  // const [data, setData] = useState(null);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const { user } = useAuth();

  const form = useForm<z.infer<typeof ProformaScheme>>({
    resolver: zodResolver(ProformaScheme),
    defaultValues: {
      proforma_id: "",
      date: "",
      reference: "",
      prepared_by: "",
      approved_by: "",
      email: "",
      phone_number: "",
    },
  });

  const frameworks = [
    {
      id: 1,
      value: "ventas",
      label: "ventas",
    },
    {
      id: 2,
      value: "sveltekit",
      label: "SvelteKit",
    },
    {
      id: 3,
      value: "nuxt.js",
      label: "Nuxt.js",
    },
  ];

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

  return (
    <Form {...form}>
      <form>
        <div className="w-full">
          <div className="flex w-[35%] absolute right-[5rem] top-[1rem]">
            <div className="p-2 w-[50%] mb-8">
              <FormField
                control={form.control}
                name="proforma_id"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="placeholder:text-foreground"
                        disabled
                        type="text"
                        placeholder="N 15"
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
                        className="placeholder:text-foreground"
                        disabled
                        type="text"
                        placeholder="Fecha: 01/12/2023"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="p-4 w-full lg:w-[50%] mb-4">
            <FormField
              control={form.control}
              name="reference"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Referencia</FormLabel>
                  <FormControl>
                    <Input type="text" className="uppercase" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 mb-4">
            <div className="p-4">
              <FormField
                control={form.control}
                name="prepared_by"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Elaborado por</FormLabel>
                    <FormControl>
                      <Input className="placeholder:text-foreground" value={user ? user?.nombre :"null"} disabled type="text" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="p-4">
              <FormField
                control={form.control}
                name="approved_by"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Aprobado por</FormLabel>
                    <FormControl>
                      <Input
                        className="placeholder:text-foreground"
                        disabled
                        type="text"
                        placeholder="Jhoel Fernández A."
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="p-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Correo</FormLabel>
                    <FormControl>
                      <Input type="text" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="p-4">
              <FormField
                control={form.control}
                name="phone_number"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Telefono</FormLabel>
                    <FormControl>
                      <Input type="text" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <Separator className="my-8"/>
          <div className="grid grid-cols-2 lg:grid-cols-3 w-full lg:w-[75%] relative">
            <div className="p-4">
              <FormField
                control={form.control}
                name="company_id"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Empresa</FormLabel>
                    <Popover open={open} onOpenChange={setOpen}>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          role="combobox"
                          aria-expanded={open}
                          className="w-full justify-between relative"
                        >
                          {value
                            ? frameworks.find(
                                (framework) => framework.value === value
                              )?.label
                            : "Selecciona empresa"}
                          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-full p-0">
                        <Command>
                          <CommandInput placeholder="Buscar empresa" />
                          <CommandEmpty>Empresa no encontrada</CommandEmpty>
                          <CommandGroup>
                            {frameworks.map((framework) => (
                              <CommandItem
                                key={framework.value}
                                value={framework.value}
                                onSelect={(currentValue) => {
                                  setValue(
                                    currentValue === value ? "" : currentValue
                                  );
                                  setOpen(false);
                                }}
                              >
                                <Check
                                  className={cn(
                                    "mr-2 h-4 w-4",
                                    value === framework.value
                                      ? "opacity-100"
                                      : "opacity-0"
                                  )}
                                />
                                {framework.label}
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </Command>
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="p-4">
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
            <div className="p-4">
              <FormField
                control={form.control}
                name="proforma_type"
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
        <ProformaFormTabs form={form}/>
      </form>
    </Form>
  );
}
