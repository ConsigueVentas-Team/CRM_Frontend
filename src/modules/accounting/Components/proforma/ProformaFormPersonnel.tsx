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

type Personnel = {
  position: string;
  name: string;
  profileImage: string;
};

const personnelList: Personnel[] = [
  {
    position: "john_doe",
    name: "John Doe",
    profileImage: "/path/to/john_doe_profile.jpg",
  },
  {
    position: "jane_smith",
    name: "Jane Smith",
    profileImage: "/path/to/jane_smith_profile.jpg",
  },
  {
    position: "Raul Perez",
    name: "Raul Perez",
    profileImage: "/path/to/jane_doe_profile.jpg",
  },
];

export function ProformaFormPersonnel({ form }: any) {
  const [open, setOpen] = useState(false);
  const [selectedPersonnel, setSelectedPersonnel] = useState<Personnel | null>(
    null
  );

  return (
    <div className="border rounded-lg p-4">
      <p className="font-bold mb-4">Personal del Proyecto</p>
      <div className="flex p-4 gap-12">
        <div className="flex flex-col gap-8">
          <div className="flex items-center space-x-4">
            <FormField
              control={form.control}
              name="personal"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Personal: </FormLabel>
                  <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          className="w-auto justify-start"
                        >
                          {field.value
                            ? personnelList.find(
                                (personnel) =>
                                  personnel.position === field.value
                              )?.name
                            : "Agregar un colaborador"}
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
                              className="gap-4"
                              value={personnel.name}
                              key={personnel.position}
                              onSelect={(position) => {
                                setSelectedPersonnel(
                                  personnelList.find(
                                    (personnel) =>
                                      personnel.position === position
                                  ) || null
                                );
                                setOpen(false);
                              }}
                            >
                              <Avatar>
                                <AvatarImage
                                  src="https://images.unsplash.com/flagged/photo-1595514191830-3e96a518989b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlcmZpbCUyMGRlJTIwaG9tYnJlfGVufDB8fDB8fHww"
                                  alt="user profile image"
                                  className="object-cover"
                                />
                                <AvatarFallback>CN</AvatarFallback>
                              </Avatar>
                              {personnel.name}
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
            <Badge>1 Diseñador Grafico</Badge>
            <Badge>2 Marketing Digital</Badge>
            <Badge>2 Marketing Digital</Badge>
          </div>
        </div>
        <div>
          <FormField
            control={form.control}
            name="fecha"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tiempo de Trabajo: </FormLabel>
                <FormControl>
                  <Input type="text" placeholder="N° Dias" />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
      </div>
    </div>
  );
}
