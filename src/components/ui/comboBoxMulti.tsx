import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
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

const categorias = [
  { value: "camisas", label: "Camisas" },
  { value: "pantalones", label: "Pantalones" },
  { value: "vestidos", label: "Vestidos" },
  { value: "sudaderas", label: "Sudaderas" },
  { value: "chaquetas", label: "Chaquetas" },
];

type ComboboxMultiProps = {
  onSelectCategory: (selectedCategories: string[]) => void;
};
export function ComboboxMulti({ onSelectCategory }: ComboboxMultiProps) {
  const [open, setOpen] = React.useState(false);
  const [values, setValues] = React.useState<string[]>([]);

  const handleSelect = (selectedValue: string) => {
    const newValue = [...values]; // Cambio de onSelectCategory a values
    const index = newValue.indexOf(selectedValue);
    if (index === -1) {
      newValue.push(selectedValue);
    } else {
      newValue.splice(index, 1);
    }
    setValues(newValue); // Modificación de onSelectCategory a setValues
    onSelectCategory(newValue); // Enviar las categorías seleccionadas
  };

  const handlePopoverToggle = () => {
    setOpen(!open);
  };

  const selectedLabels = values.map(
    (value) =>
      categorias.find((categoria) => categoria.value === value)?.label || ""
  );
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[100%] justify-between"
          onClick={handlePopoverToggle}
        >
          {selectedLabels.length > 0
            ? selectedLabels.join(", ")
            : "Selecciona las categorias..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Busca las categorias..." />
          <CommandEmpty>No category found.</CommandEmpty>
          <CommandGroup>
            {categorias.map((categoria) => (
              <CommandItem
                key={categoria.value}
                value={categoria.value}
                onSelect={(currentValue) => {
                  handleSelect(currentValue);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    values.includes(categoria.value)
                      ? "opacity-100"
                      : "opacity-0"
                  )}
                />
                {categoria.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
