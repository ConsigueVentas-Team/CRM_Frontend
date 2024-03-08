import { Input } from "@/components/ui/input";

export const Search = () => {
    return (
      <form>
        <div className="relative w-96">
          <Input
            type="search"
            id="search-dropdown"
            placeholder="Buscar"
            className="w-full"
          />
        </div>
      </form>
    );
  }
