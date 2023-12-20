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
} from "@/components/ui/form";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Check, ChevronsUpDown, PlusSquare } from "lucide-react";
import { cn, getInitials } from "@/lib/utils";

const personnelList: FromPersonnel []= [
  {
    employee_id: 11,
    name: "Pedro Ortiz",
    surname: "Picapiedra",
    dni: "82735267",
    position: {
      id: 1,
      name: "Diseñador Grafico",
    },
    isSelect:false
  },
  {
    employee_id: 12,
    name: "Betty",
    surname: "De Mármol",
    dni: "45263728",
    position: {
      id: 2,
      name: "Frontend Developer",
    },
    isSelect: false
  },
  {
    employee_id: 13,
    name: "Pedro",
    surname: "Gallese",
    dni: "82735162",
    position: {
      id: 3,
      name: "Backend Developer",
    },
    isSelect: false
  },
  {
    employee_id: 4,
    name: "carlos",
    surname: "Martines",
    dni: "23546587",
    position: {
      id: 3,
      name: "Backend Developer",
    },
    isSelect: false
  },
];

export function ProformaFormPersonnel({ form }: any) {
  const [personel, setPersonnel] = useState<Personnel[]>([]);
  const [elementosDisponibles, setElementosDisponibles] = useState<FromPersonnel[]>(personnelList);

  const handleSeleccionar = () => {
    const conteoPorPosicion = elementosDisponibles.reduce((conteo, obj) => {
      // Verificar si el objeto está seleccionado y tiene una posición específica
      if (obj.isSelect && obj.position && obj.position.id) {
        const posicionId = obj.position.id;

        // Incrementar el conteo para la posición específica o inicializar en 1 si es la primera vez
        conteo[posicionId] = conteo[posicionId] || { position: obj.position, count: 0 };
        conteo[posicionId].count += 1;
      }

      return conteo;
    }, {});

    return (
      <div>
        {Object.entries(conteoPorPosicion).map(([posicionId, { position, count }]) => (
          <Badge key={posicionId}>
            {count.toString()} {position.name}
          </Badge>
        ))}
      </div>
    )
    

    
  }

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
                          {elementosDisponibles.map((personnel) => (
                            <CommandItem
                              className="gap-4 justify-between"
                              value={personnel.name}
                              key={personnel.employee_id}
                              onSelect={() => {
<<<<<<< HEAD
                                form.setValue("personal_proyecto", [
                                  {
                                    employees_id: personnel.employee_id,
                                  },
                                ]);
                                handleSeleccionar(personnel.employee_id);
=======
                                form.setValue("personal_proyecto", personel);
                                setElementosDisponibles((prev) => prev.map((obj) =>
                                  obj.employee_id === personnel.employee_id ? { ...obj, isSelect: !obj.isSelect } : obj
                                ));
                                const listaSeleccionados = elementosDisponibles
                                  .filter(obj => obj.isSelect)
                                  .map(obj => ({ employee_id: obj.employee_id }));
                                setPersonnel(listaSeleccionados);
>>>>>>> 5293e00f457568f94d8959699e7af794e36ba13c
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
                                  personnel.isSelect
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
            {handleSeleccionar()}
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
