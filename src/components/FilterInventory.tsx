import { useState, ChangeEvent, useEffect } from "react";
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

const productos = [
  { id: 1, nombre: "Camisa Roja", precio: 25, categoria: "camisas" },
  { id: 2, nombre: "Pantalón Azul", precio: 40, categoria: "pantalones" },
  { id: 3, nombre: "Vestido Floral", precio: 55, categoria: "vestidos" },
  { id: 4, nombre: "Sudadera Gris", precio: 30, categoria: "sudaderas" },
  { id: 5, nombre: "Chaqueta de Cuero", precio: 80, categoria: "chaquetas" },
  { id: 6, nombre: "Camisa Blanca", precio: 28, categoria: "camisas" },
  { id: 7, nombre: "Pantalón Negro", precio: 45, categoria: "pantalones" },
  { id: 8, nombre: "Vestido Rojo", precio: 60, categoria: "vestidos" },
  { id: 9, nombre: "Sudadera Azul", precio: 35, categoria: "sudaderas" },
  { id: 10, nombre: "Chaqueta", precio: 70, categoria: "chaquetas" },
];
type Producto = {
  id: number;
  nombre: string;
  precio: number;
  categoria: string;
};
export const FilterInventory = () => {
  const [minValue, setMinValue] = useState<number>(15);
  const [maxValue, setMaxValue] = useState<number>(100);
  const [filteredProducts, setFilteredProducts] =
    useState<Producto[]>(productos);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleSelectCategory = (selectedCategories: string[]) => {
    setSelectedCategories(selectedCategories);
  };
  useEffect(() => {
    console.log(filteredProducts);
  }, [filteredProducts]);
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
      (product) => product.precio >= minValue && product.precio <= maxValue
    );

    const filteredByCategories = filteredByPrice.filter((product) =>
      selectedCategories.includes(product.categoria)
    );

    setFilteredProducts(filteredByCategories);
    console.log(filteredByCategories);
  };

  return (
    <>
      <Dialog>
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
    </>
  );
};
