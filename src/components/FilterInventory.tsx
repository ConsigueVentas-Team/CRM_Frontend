import { useState, ChangeEvent } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ComboboxMulti } from "./ui/comboBoxMulti";
import { Slider } from "../components/ui/slider";
import { Filter } from "lucide-react";
import { Producto } from "@/types/Producto";
import { categoryColors, productos } from "@/modules/inventory/data/data";
import { Badge } from "@/components/ui/badge";
export const FilterInventory = ({
  onFilter,
}: {
  onFilter: (filtered: Producto[]) => void;
}) => {
  const [minValue, setMinValue] = useState<number>(15);
  const [maxValue, setMaxValue] = useState<number>(100);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const [open, setOpen] = useState(false);
  const handleRemoveCategory = (categoria: string) => {
    const updatedCategories = selectedCategories.filter((c) => c !== categoria);
    setSelectedCategories(updatedCategories);
    const filteredByPrice = productos.filter(
      (product: { precio: number }) =>
        product.precio >= minValue && product.precio <= maxValue
    );

    const filteredByCategories = filteredByPrice.filter(
      (product: { categoria: string }) =>
        updatedCategories.includes(product.categoria)
    );

    onFilter(filteredByCategories);
  };
  const handleSelectCategory = (selectedCategories: string[]) => {
    setSelectedCategories(selectedCategories);
  };

  const handleMinInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMinValue(Number(e.target.value));
  };

  const handleMaxInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMaxValue(Number(e.target.value));
  };
  const handleSliderChange = (newValues: number[]) => {
    setMinValue(newValues[0]);
    setMaxValue(newValues[1]);
  };

  const handleFilterClick = () => {
    const filteredByPrice = productos.filter(
      (product: { precio: number }) =>
        product.precio >= minValue && product.precio <= maxValue
    );

    const filteredByCategories = filteredByPrice.filter(
      (product: { categoria: string }) =>
        selectedCategories.includes(product.categoria)
    );
    onFilter(filteredByCategories);
    setOpen(false);
  };
  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button>
            Filter <Filter className="ml-2"></Filter>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Categoria:</DialogTitle>
          </DialogHeader>
          <ComboboxMulti onSelectCategory={handleSelectCategory} />
          <DialogHeader>
            <DialogTitle>Precio:</DialogTitle>
          </DialogHeader>
          <Slider
            defaultValue={[minValue, maxValue]}
            onValueChange={handleSliderChange}
          />

          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-5 gap-5">
              <div className="col-span-2 flex items-center">
                <Input
                  id="Min"
                  value={minValue.toString()}
                  onChange={handleMinInputChange}
                />
              </div>
              <div className="flex items-center justify-center col-span-1">
                <span className="text-center">-</span>
              </div>
              <div className="col-span-2 flex items-center">
                <Input
                  id="Max"
                  value={maxValue.toString()}
                  onChange={handleMaxInputChange}
                />
              </div>
            </div>
          </div>

          <DialogFooter>
            <Button type="button" onClick={handleFilterClick}>
              Filtrar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      {selectedCategories.map((categoria, index) => (
        <Badge
          key={index}
          style={{ backgroundColor: categoryColors[categoria] }}
        >
          {categoria}
          <button
            type="button"
            onClick={() => handleRemoveCategory(categoria)}
            className="ml-1"
          >
            x
          </button>
        </Badge>
      ))}
    </>
  );
};
