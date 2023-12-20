import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Check, ChevronsUpDown, PlusSquare } from "lucide-react";
import { cn, getInitials } from "@/lib/utils";

const personnelList = [
  {
    employee_id: 1,
    name: "Pedro Ortiz",
    surname: "Picapiedra",
    dni: "82735267",
    position: {
      id: 1,
      name: "Diseñador Grafico",
    },
  },
  {
    employee_id: 2,
    name: "Betty",
    surname: "De Mármol",
    dni: "45263728",
    position: {
      id: 2,
      name: "Frontend Developer",
    },
  },
  {
    employee_id: 3,
    name: "Pedro",
    surname: "Gallese",
    dni: "82735162",
    position: {
      id: 3,
      name: "Backend Developer",
    },
  },
] as const;

export function ProformaFormPersonnel({ form }: any) {
  const [personnel, setPersonnel] = useState<Personnel[]>([]);

  return (
    <div className="border rounded-lg p-4">
      <p className="font-bold mb-4">Personal del Proyecto</p>
      <div className="flex p-4 gap-[20rem]">
        <div className="flex flex-col gap-8">
          <div className="flex items-center space-x-4">
            <FormField
              control={form.control}
              name="personal_proyecto"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Personal: </FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          role="combobox"
                          className="w-auto justify-start text-muted-foreground"
                        >
                          Agregar un colaborador
                          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="p-0" side="right" align="start">
                      <Command>
                        <CommandInput placeholder="Buscar Colaborador..." />
                        <CommandEmpty>No hay colaboradores.</CommandEmpty>
                        <CommandGroup>
                          {personnelList.map((personnel) => (
                            <CommandItem
                              className="gap-4 justify-between"
                              value={personnel.name}
                              key={personnel.employee_id}
                              onSelect={() => {
                                form.setValue("personal_proyecto", [
                                  {
                                    employee_id: personnel.employee_id,
                                  },
                                ]);
                              }}
                            >
                              <div className="flex gap-3">
                                <Avatar>
                                  <AvatarImage
                                    src="https://images.unsplash.com/flagged/photo-1595514191830-3e96a518989b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlcmZpbCUyMGRlJTIwaG9tYnJlfGVufDB8fDB8fHww"
                                    alt="user profile image"
                                    className="object-cover"
                                  />
                                  <AvatarFallback>
                                    {getInitials(personnel.name)}
                                  </AvatarFallback>
                                </Avatar>
                                <div className="flex flex-col">
                                  <p>{personnel.name}</p>
                                  <p className="text-sm text-muted-foreground truncate">
                                    {personnel.position.name}
                                  </p>
                                </div>
                              </div>
                              <Check
                                className={cn(
                                  "mr-2 h-4 w-4",
                                  personnel.employee_id === field.value
                                    ? "opacity-100"
                                    : "opacity-0"
                                )}
                              />
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </Command>
                    </PopoverContent>
                  </Popover>
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col gap-4 max-w-[10rem]">
            <Badge>2 Diseñador Grafico</Badge>
          </div>
        </div>
        <div>
          <FormField
            control={form.control}
            name="work_time"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tiempo de Trabajo: </FormLabel>
                <FormControl>
                  <Input type="text" placeholder="N° Dias" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
      </div>
    </div>
  );
}
