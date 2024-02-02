import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Input } from "./input";
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof searchVariants> {
  icon: string;
}

const searchVariants = cva("");

export const Search = React.forwardRef<HTMLButtonElement, InputProps>(
  ({ className, icon }, ref) => {
    return (
      <form className={cn(searchVariants({}), className)}>
        <div className="relative w-80">
          <Input
            type="search"
            id="search-dropdown"
            placeholder="Buscar productos..."
            className="w-full"
          />
        </div>
      </form>
    );
  }
);
