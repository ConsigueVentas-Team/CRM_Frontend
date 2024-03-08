import { useEffect, useState, useRef } from "react";
import { Input } from "@/components/ui/input";

export function DebouncedInput({
  value: initialValue,
  onChange,
  debounce = 500,
  ...props
}: {
  value: string | number;
  onChange: (value: string | number) => void;
  debounce?: number;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange">) {
  const [value, setValue] = useState(initialValue);
  const debounceTimeout = useRef<NodeJS.Timeout | null>(null); //1

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  useEffect(() => {
    // Cancela el timeout existente si hay uno
    if (debounceTimeout.current !== null) {
      clearTimeout(debounceTimeout.current);
    }

    // Configura un nuevo timeout
    debounceTimeout.current = setTimeout(() => {
      onChange(value);
    }, debounce);

    // Limpia el timeout al desmontar el componente
    return () => {
      if (debounceTimeout.current !== null) {
        clearTimeout(debounceTimeout.current);
      }
    };
  }, [value, debounce, onChange]);

  return (
    <Input
      {...props}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}