import { Input } from "@/components/ui/input";
import React, { ChangeEvent, FormEvent } from "react";
import { Search } from 'lucide-react';

interface CustomerSearchProps {
  setSearch: (value: string) => void;
}

export const CustomerSearch: React.FC<CustomerSearchProps> = ({ setSearch }) => {
  let timer: ReturnType<typeof setTimeout>;

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    clearTimeout(timer);
    const value = event.target.value;
    timer = setTimeout(() => {
      setSearch(value);
    }, 500);
  };

  const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Esto previene que se recargue la página
  };

  return (
    <form onSubmit={handleSearchSubmit}>
      <div className="relative text-gray-500">
        <Input
          type="search"
          placeholder="Buscar cliente"
          onChange={handleInputChange}
          className="bg-background h-10 px-5 pr-10 text-sm focus:outline-none"
        />
        <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
          <Search className="text-gray-500 h-4 w-4" />
        </button>
      </div>
    </form>
  );
};