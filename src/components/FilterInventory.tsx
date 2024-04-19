import { useState, ChangeEvent, useEffect, Dispatch, SetStateAction } from "react";
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
import { Badge } from "@/components/ui/badge";
import { RootState, useAppDispatch } from "@/store";
import { useSelector } from "react-redux";
import { getCategories } from "@/store/categories/thunk";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import { categoryColors } from "@/lib/utils";
import { CategoriaDetail } from "@/types/auth";

interface PropFilters {
  categoryIds: number[]
  minValue: number
  maxValue: number
}
type FilterFunction = Dispatch<SetStateAction<PropFilters>>;
export const FilterInventory = ({
  onFilter
}: { onFilter:FilterFunction}) => {
  const [minValue, setMinValue] = useState<number>(100);
  const [maxValue, setMaxValue] = useState<number>(4000);
  const [selectedCategories, setSelectedCategories] = useState<CategoriaDetail[]>([]);
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();
  const { categories } = useSelector((state: RootState) => state.categories);

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  const handleRemoveCategory = (categoria: CategoriaDetail) => {
    const updatedCategories = selectedCategories.filter((c) => c.id !== categoria.id);
    setSelectedCategories(updatedCategories);
    const categoryIds = updatedCategories.map(category => category.id)
    onFilter({categoryIds, minValue, maxValue});
     
  };

  const handleSelectCategory = (categoryName: string[]) => {
    const categoryIds = selectedCategories.map(category => category.id)
    const updatedCategories =categories.filter((category) =>categoryName.includes(category.name.toLocaleLowerCase()));
    setSelectedCategories(updatedCategories);
     onFilter({categoryIds, minValue, maxValue});
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
    setOpen(false)
    const categoryIds = selectedCategories.map(category => category.id)
    onFilter({categoryIds, minValue, maxValue})
  };



  return (
    <div className="flex justify-between mt-4 2xl:mt-0 gap-4">
      <div className="flex gap-3 items-center justify-center">
        <Input
          className="w-16"
          id="Min"
          value={minValue.toString()}
          readOnly
          disabled
        />
        -
        <Input
          className="w-16"
          id="Max"
          value={maxValue.toString()}
          readOnly
          disabled
        />

      </div>

      {
        <ScrollArea className="w-full max-w-[20rem] mt-1">
          <div className="flex items-center gap-5 ">
            {selectedCategories.map((category, index) => {
              const categoria = categories.find(
                (c) => c.name === category.name
              );
              const categoriaColor = categoria ? categoria.color : 0;
              return (
                <Badge
                  key={index}
                  className={`${categoryColors[categoriaColor]} `}
                >
                  {category.name}
                  <button
                    type="button"
                    onClick={() => handleRemoveCategory(category)}
                    className="ml-1"
                  >
                    <X className="w-4" />
                  </button>
                </Badge>
              );
            })}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
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
            categorias={categories}
            selectedCategories ={selectedCategories}
          />
          <DialogHeader>
            <DialogTitle>Precio:</DialogTitle>
          </DialogHeader>
          <Slider
            defaultValue={[minValue, maxValue]}
            onValueChange={handleSliderChange}
            max={1000}
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
    </div>
  );
};
