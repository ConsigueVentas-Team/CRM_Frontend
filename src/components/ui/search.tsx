import React, { ChangeEvent } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Input } from "./input";
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
  VariantProps<typeof searchVariants> {
  icon: string;
  setSearch: (value: string) => void;
}

const searchVariants = cva("");

export const Search = React.forwardRef<HTMLButtonElement, InputProps>(
  ({ className, icon, setSearch }, ref) => {
    let timer: ReturnType<typeof setTimeout>;

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
      clearTimeout(timer);
      const value = event.target.value;
      timer = setTimeout(() => {
        setSearch(value);
      }, 500);
    };

    return (
      <form className={cn(searchVariants({}), className)}>
        <div className="relative w-80">
          <Input
            type="search"
            id="search-dropdown"
            placeholder="Buscar productos..."
            className="w-full"
            onChange={handleInputChange}
          />
        </div>
      </form>
    );
  }
);
