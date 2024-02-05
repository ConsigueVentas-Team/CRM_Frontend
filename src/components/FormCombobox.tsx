import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import { Check, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useState } from "react";

interface Props {
  form: any;
  results: {
    label: string;
    value: number;
  }[];
  name: string;
  label: string;
}

export function FormCombobox({ form, results, name, label }: Props) {
  const [open, setOpen] = useState(false);
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-col gap-2">
          <FormLabel>{label}</FormLabel>
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  aria-expanded={open}
                  variant="outline"
                  role="combobox"
                  className={cn(
                    "w-[200px] justify-between hover:bg-transparent font-normal",
                    !field.value && "text-muted-foreground"
                  )}
                >
                  {field.value
                    ? results.find((result) => result.value === field.value)
                        ?.label
                    : `Seleccione un ${label}`}
                  <ChevronDown className="h-4 w-4 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
              <Command>
                <CommandInput placeholder={` ${label}...`} />
                <CommandEmpty>{label} no encontrado</CommandEmpty>
                <CommandGroup>
                  {results.map((result) => (
                    <CommandItem
                      value={result.label}
                      key={result.value}
                      onSelect={() => {
                        form.setValue(name, result.value);
                        setOpen(false);
                      }}
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          result.value === field.value
                            ? "opacity-100"
                            : "opacity-0"
                        )}
                      />
                      {result.label}
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
  );
}
