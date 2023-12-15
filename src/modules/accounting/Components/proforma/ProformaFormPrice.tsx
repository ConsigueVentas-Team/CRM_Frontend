import { Badge } from "@/components/ui/badge";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface PackagePriceProps {
  form: any;
  packageName: string;
  noteName: string;
  priceName: string;
}

export function ProformaFormPrice({
  form,
  packageName,
  noteName,
  priceName,
}: PackagePriceProps) {
  return (
    <div className="p-4">
      <Badge className="w-32 mb-8 bg-primary-foreground text-primary hover:text-black px-8">
        {packageName}
      </Badge>
      <FormField
        control={form.control}
        name={noteName}
        render={({ field }) => (
          <FormItem className="mb-4">
            <FormLabel>Nota: </FormLabel>
            <FormControl>
              <Input type="text" {...field} />
            </FormControl>
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name={priceName}
        render={({ field }) => (
          <FormItem>
            <FormLabel>S/.</FormLabel>
            <FormControl>
              <Input className="w-[15rem]" type="text" {...field} />
            </FormControl>
          </FormItem>
        )}
      />
    </div>
  );
}
