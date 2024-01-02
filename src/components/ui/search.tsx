import React from "react";
import Icon from "./icon";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Button } from "./button";
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
        <div className="relative">
          <Input
            type="search"
            id="search-dropdown"
            placeholder="Search..."
            className="w-full"
          />
          <Button className="absolute top-0 end-0 shadow-lg">
            <Icon name={icon} color="currentColor" size={20} />
          </Button>
        </div>
      </form>
    );
  }
);
