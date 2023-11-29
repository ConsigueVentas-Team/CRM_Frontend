import { FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useState } from "react";

interface Props {
  form: any;
  className?: string;
}

export function InputPassword({ form, className }: Props) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <FormField
      control={form.control}
      name="password"
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <div className="relative">
              <Input
                className={className}
                type={showPassword ? "text" : "password"}
                placeholder="Contraseña"
                {...field}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOffIcon className="h-5 w-5 text-muted-foreground" />
                ) : (
                  <EyeIcon className="h-5 w-5 text-muted-foreground" />
                )}
              </button>
            </div>
          </FormControl>
        </FormItem>
      )}
    />
  );
}
