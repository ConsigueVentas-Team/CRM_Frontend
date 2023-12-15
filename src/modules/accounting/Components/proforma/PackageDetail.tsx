import { Checkbox } from "@/components/ui/checkbox";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface Props {
  form?: any;
  field?: any;
  label: string;
  type?: string;
  warning?: string;
}

interface Field {
  field: {
    value: string[];
    onChange: (value: string[]) => void;
  };
}

export function DetailCheckbox({ field, label, warning }: Props) {
  return (
    <FormItem className="flex flex-row items-center justify-between space-x-3 space-y-0 p-4">
      <FormLabel className="font-normal text-base flex flex-col">
        {label}
        {warning && <span className="text-muted-foreground">({warning})</span>}
      </FormLabel>
      <FormControl>
        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
      </FormControl>
    </FormItem>
  );
}

const socialMedia = [
  {
    id: "facebook",
    label: "Facebook",
  },
  {
    id: "instagram",
    label: "Instagram",
  },
  {
    id: "tiktok",
    label: "Tiktok",
  },
] as const;

export function DetailCheckboxGroup({ label, form }: Props) {
  return (
    <FormItem className="flex flex-row items-center justify-between space-x-3 space-y-0 p-4">
      <FormLabel className="font-normal text-base">{label}</FormLabel>
      <div className="flex gap-4">
        {socialMedia.map((item) => (
          <FormField
            key={item.id}
            control={form.control}
            name="items"
            render={({ field }: Field) => {
              return (
                <FormItem
                  key={item.id}
                  className="flex flex-row items-start space-x-3 space-y-0"
                >
                  <FormLabel className="font-normal">{item.label}</FormLabel>
                  <FormControl>
                    <Checkbox
                      checked={field.value?.includes(item.id)}
                      onCheckedChange={(checked) => {
                        const value = field.value || [];
                        return checked
                          ? field.onChange([...value, item.id])
                          : field.onChange(
                              field.value?.filter((value) => value !== item.id),
                            );
                      }}
                    />
                  </FormControl>
                </FormItem>
              );
            }}
          />
        ))}
      </div>
    </FormItem>
  );
}

export function DetailInput({ label, type, field }: Props) {
  return (
    <FormItem className="flex flex-row items-center justify-between space-x-3 space-y-0 p-4">
      <FormLabel className="font-normal text-base">{label}</FormLabel>
      <div className={`flex items-center gap-4 ${type && "w-48"}`}>
        <FormControl>
          <Input type="text" className="w-14" {...field} />
        </FormControl>
        {type === "post" && <span>Post x Mes</span>}
        {type === "stories" && <span>Stories x Mes</span>}
        {type === "monitoring" && <span>Lunes - Viernes</span>}
      </div>
    </FormItem>
  );
}

export function DetailRadioGroup({ field, label }: Props) {
  return (
    <FormItem className="flex flex-row items-center justify-between space-x-3 space-y-0 p-4">
      <FormLabel className="font-normal text-base">{label}</FormLabel>
      <FormControl>
        <RadioGroup
          onValueChange={field.onChange}
          defaultValue="basic"
          className="flex gap-4"
        >
          <FormItem className="flex items-center space-x-3 space-y-0">
            <FormControl>
              <RadioGroupItem value="basic" />
            </FormControl>
            <FormLabel className="font-normal">Basico</FormLabel>
          </FormItem>
          <FormItem className="flex items-center space-x-3 space-y-0">
            <FormControl>
              <RadioGroupItem value="intermediate" />
            </FormControl>
            <FormLabel className="font-normal">Intermedio</FormLabel>
          </FormItem>
          <FormItem className="flex items-center space-x-3 space-y-0">
            <FormControl>
              <RadioGroupItem value="advanced" />
            </FormControl>
            <FormLabel className="font-normal">Avanzado</FormLabel>
          </FormItem>
        </RadioGroup>
      </FormControl>
    </FormItem>
  );
}
