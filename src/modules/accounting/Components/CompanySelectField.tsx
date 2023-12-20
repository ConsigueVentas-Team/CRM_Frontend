import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import { FormField, FormItem, FormLabel } from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import api from "@/services/api";
import { Check, ChevronsUpDown } from "lucide-react";
import { useEffect, useState } from "react";

interface Props {
  form: any;
}

const CompanySelectField = ({ form }: Props) => {
  const [open, setOpen] = useState(false);
  const [companies, setCompanies] = useState<Company[]>([]);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await api.get('/companies');
        setCompanies(response.data);
      } catch (error) {
        console.error('Error al obtener las compañías:', error);
      }
    };

    fetchCompanies();
  }, []);

  return (
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
                {field.value
                  ? companies.find(
                      (company) => company.company_id === field.value
                    )?.business_name
                  : "Selecciona empresa"}
                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full p-0">
              <Command>
                <CommandInput placeholder="Buscar empresa" />
                <CommandEmpty>Empresa no encontrada</CommandEmpty>
                <CommandGroup>
                  {companies.map((company) => (
                    <CommandItem
                      value={company.business_name}
                      key={company.company_id}
                      onSelect={() => {
                        form.setValue("company_id", company.company_id);
                        setOpen(false);
                      }}
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          company.company_id.toString() === field.value
                            ? "opacity-100"
                            : "opacity-0"
                        )}
                      />
                      {company.business_name}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </Command>
            </PopoverContent>
          </Popover>
        </FormItem>
      )}
    />
  );
};

export default CompanySelectField;
