import { useCallback, useEffect, useState } from "react";
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
import { Check, ChevronsUpDown } from "lucide-react";
import { cn, getInitials } from "@/lib/utils";
import { useQuery } from "react-query";
import api from "@/services/api";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Progress } from "@/components/ui/progress";

interface FromPersonnel extends PersonnelDetail {
  isSelect: boolean;
}

interface PersonalCount {
  position: PersonnelPosition;
  count: number;
}

interface CommandItemPersonnelProps {
  personnel: FromPersonnel;
  onSelect: (personnel: FromPersonnel) => void;
}

interface countByPosition {
  [key: number]: { position: number; count: number };
}

export function ProformaFormPersonnel({ form }: any) {
  const [personel, setPersonnel] = useState<Personnel[]>([]);
  const [elementosDisponibles, setElementosDisponibles] = useState<
    FromPersonnel[]
  >([]);
  const [loadingProgress, setLoadingProgress] = useState(0);

  const {
    data: personnelList,
    status,
    isLoading,
    isError,
  } = useQuery("personnelList", () => {
    return api.get("/employees").then((res) => res.data.results);
  });

  useEffect(() => {
    setLoadingProgress(0);
    const increment = 100 / ((2 * 1000) / 100);

    const intervalId = setInterval(() => {
      setLoadingProgress((prevProgress) => {
        const nextProgress = prevProgress + increment;

        if (nextProgress >= 100) {
          clearInterval(intervalId);
          return 100;
        }

        return nextProgress;
      });
    }, 100);

    if (status === "success") {
      const personal = personnelList.map((obj: PersonnelDetail) => ({
        ...obj,
        isSelect: false,
      }));
      setLoadingProgress((10 / 155) * 100);
      setElementosDisponibles(personal);
    }
    return () => clearInterval(intervalId);
  }, [status, personnelList]);

  const handleSelect = () => {
    const countByPosition =
      elementosDisponibles &&
      elementosDisponibles.reduce<countByPosition>((conteo, obj) => {
        if (obj.isSelect && obj.position && obj.position.id_position) {
          const posicionId = obj.position.id_position;
          conteo[posicionId] = conteo[posicionId] || {
            position: obj.position,
            count: 0,
          };
          conteo[posicionId].count += 1;
        }
        return conteo;
      }, {});
    return countByPosition ? (
      <BadgeListPersonnel personnel={Object.values(countByPosition)} />
    ) : null;
  };

  const onSelect = useCallback(
    (personnel: FromPersonnel) => {
      form.setValue("personal_proyecto", personel);
      setElementosDisponibles((prev) => {
        const nuevosElementos = prev.map((obj) =>
          obj.employee_id === personnel.employee_id
            ? { ...obj, isSelect: !obj.isSelect }
            : obj
        );
        const listaSeleccionados = nuevosElementos
          .filter((obj) => obj.isSelect)
          .map((obj) => ({ employees_id: obj.employee_id }));
        setPersonnel(listaSeleccionados);
        return nuevosElementos;
      });
    },
    [form, personel]
  );

  useEffect(() => {
    form.setValue("personal_proyecto", personel);
  }, [personel]);

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

                        <CommandGroup className="h-40">
                          <ScrollArea className="w-full h-40">
                            {isLoading ? (
                              <div className="w-full h-[100%] p-4 pt-8">
                                <Progress
                                  value={loadingProgress}
                                  className="bg-muted"
                                />
                              </div>
                            ) : isError ? (
                              <CommandEmpty>Ha ocurrido un error</CommandEmpty>
                            ) : elementosDisponibles ? (
                              elementosDisponibles.length === 0 ? (
                                <CommandEmpty>
                                  No hay elementos disponibles
                                </CommandEmpty>
                              ) : (
                                elementosDisponibles.map((personnel) => (
                                  <CommandItemPersonnel
                                    key={personnel.employee_id}
                                    personnel={personnel}
                                    onSelect={onSelect}
                                  />
                                ))
                              )
                            ) : (
                              <CommandEmpty>
                                No hay elementos disponibles
                              </CommandEmpty>
                            )}
                          </ScrollArea>
                        </CommandGroup>
                      </Command>
                    </PopoverContent>
                  </Popover>
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col gap-4 max-w-[10rem]">
            {handleSelect()}
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
                  <Input type="number" placeholder="N° Dias" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>
    </div>
  );
}

function CommandItemPersonnel({
  personnel,
  onSelect,
}: CommandItemPersonnelProps) {
  return (
    <CommandItem
      className="gap-4 justify-between"
      value={personnel.name}
      key={personnel.employee_id}
      onSelect={() => onSelect(personnel)}
    >
      <div className="flex gap-3">
        <Avatar>
          <AvatarImage
            src=""
            alt="user profile image"
            className="object-cover"
          />
          <AvatarFallback>{getInitials(personnel.name)}</AvatarFallback>
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
          personnel.isSelect ? "opacity-100" : "opacity-0"
        )}
      />
    </CommandItem>
  );
}

function BadgeListPersonnel({ personnel }: { personnel: PersonalCount[] }) {
  return (
    <div className="flex flex-col gap-4 max-w-[10rem]">
      {personnel.map((item: PersonalCount) => (
        <Badge
          key={item.position.id_position}
          className="flex gap-2 p-1 px-3 rounded-lg"
        >
          {item.count}
          <p className="truncate">{item.position.name}</p>
        </Badge>
      ))}
    </div>
  );
}
