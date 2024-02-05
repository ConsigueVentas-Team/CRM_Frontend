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
import { Filter, X } from "lucide-react";
import { Product } from "@/types/product";

import { Badge } from "@/components/ui/badge";
import { CategoriaDetail } from "@/types/auth";
import { fetchCategorias } from "@/modules/configuration/api/apiService";

const colors = [
  "bg-blue-500",
  "bg-green-500",
  "bg-red-500",
  "bg-yellow-500",
  "bg-teal-500",
  "bg-violet-500",
];

export const FilterInventory = ({
  onFilter,
  products,
}: {
  onFilter: (filtered: Product[]) => void;
  products: Product[];
}) => {
  const [minValue, setMinValue] = useState<number>(15);
  const [maxValue, setMaxValue] = useState<number>(100);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [categorias, setCategorias] = useState<CategoriaDetail[]>([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoriasData = await fetchCategorias();
        setCategorias(categoriasData);
      } catch (error) {
        console.error("Error fetching categorias:", error);
      }
    };

    fetchData();
  }, []);

  const handleRemoveCategory = (categoria: string) => {
    const updatedCategories = selectedCategories.filter((c) => c !== categoria);
    setSelectedCategories(updatedCategories);
    applyFilters(updatedCategories, minValue, maxValue);
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
    applyFilters(selectedCategories, minValue, maxValue);

    setOpen(false);
  };

  const applyFilters = (categories: string[], min: number, max: number) => {
    let filteredProducts = products;

    filteredProducts = filteredProducts.filter((product) => {
      const category = categorias.find(
        (category) => category.id === product.category
      );
      return category && categories.includes(category.name);
    });

    filteredProducts = filteredProducts.filter(
      (product: { price: number }) =>
        product.price >= min && product.price <= max
    );

    onFilter(filteredProducts);
  };

  return (
    <>
      <div className="grid grid-cols-5 gap-3 ">
        <div className="col-span-2 flex  items-center w-16">
          <Input id="Min" value={minValue.toString()} readOnly />
        </div>
        <div className="flex items-center justify-center col-span-1 w-4">
          <span className="text-center">-</span>
        </div>
        <div className="col-span-2 flex items-center  w-16">
          <Input id="Max" value={maxValue.toString()} readOnly />
        </div>
      </div>

      {
        <div className="flex items-center gap-5">
          {selectedCategories.map((categoriaName, index) => {
            const categoria = categorias.find((c) => c.name === categoriaName);
            const categoriaColor = categoria ? categoria.color : 0;
            return (
              <Badge key={index} className={`${colors[categoriaColor]}`}>
                {categoriaName}
                <button
                  type="button"
                  onClick={() => handleRemoveCategory(categoriaName)}
                  className="ml-1"
                >
                  <X className="w-4" />
                </button>
              </Badge>
            );
          })}
        </div>
      }

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
          <ComboboxMulti
            onSelectCategory={handleSelectCategory}
            categorias={categorias}
          />
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
