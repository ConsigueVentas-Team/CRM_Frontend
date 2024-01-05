import { FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useState } from "react";

interface Props {
  form: any;
  className?: string;
  name?: string;
  placeholder?: string;
}

export function InputPassword({ form, className, name = 'password', placeholder = "Contraseña" }: Props) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <div className="relative">
              <Input
                disabled
                className={className}
                type={showPassword ? "text" : "password"}
                placeholder={placeholder}
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
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
