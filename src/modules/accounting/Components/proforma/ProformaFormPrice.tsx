import { Badge } from "@/components/ui/badge";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { handleNumericInput } from "@/lib/utils";
import { useFormContext } from "react-hook-form";

interface PackagePriceProps {
  form: any;
  packageName: string;
  index: string;
}

export function ProformaFormPrice({
  form,
  packageName,
  index,
}: PackagePriceProps) {
  const { register } = useFormContext();
  return (
    <div className="p-4">
      <Badge className="w-32 mb-8 bg-primary-foreground text-primary hover:text-black px-8">
        {packageName}
      </Badge>
      <FormField
        control={form.control}
        name={`package.${index}.note_price`}
        render={({ field }) => (
          <FormItem className="mb-4">
            <FormLabel>Nota: </FormLabel>
            <FormControl>
              <Input type="text" {...register(`package.${index}.note_price`)} />
            </FormControl>
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name={`package.${index}.price`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>S/.</FormLabel>
            <FormControl>
              <Input
                className="w-[15rem]"
                type="number"
                {...register(`package.${index}.price`, { setValueAs: value => parseFloat(value) })}
              />
            </FormControl>
            <FormMessage/>
          </FormItem>
        )}
      />
    </div>
  );
}
