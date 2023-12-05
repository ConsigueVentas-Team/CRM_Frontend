import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";

import * as React from "react"
import { addDays, format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { DateRange } from "react-day-picker"
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export function InvoiceSearch({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 20),
  });
  return (
    <div className="flex justify-center flex-col p-10 pl-20 pr-20 b-20 ml-0 mb-20 mr-0 bg-[#CCCED7] dark:bg-muted">
      <Label className="flex justify-center mb-10 text-xl font-bold">
        ¿Estás buscando una factura?
      </Label>
      <div className="flex flex-row justify-around items-center w-full">
        <div className="flex flex-col w-1/6">
          <Label className="mb-2">Cliente</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Selecciona Cliente" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="--">--</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col">
          <Label className="mb-2">Fecha de Emision</Label>
          <div className={cn("grid gap-2", className)}>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  id="date"
                  variant={"outline"}
                  className={cn(
                    "w-[300px] justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date?.from ? (
                    date.to ? (
                      <>
                        {format(date.from, "LLL dd, y")} -{" "}
                        {format(date.to, "LLL dd, y")}
                      </>
                    ) : (
                      format(date.from, "LLL dd, y")
                    )
                  ) : (
                    <span>Pick a date</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  initialFocus
                  mode="range"
                  defaultMonth={date?.from}
                  selected={date}
                  onSelect={setDate}
                  numberOfMonths={2}
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>
        <div className="flex flex-col w-1/6">
          <Label className="mb-2">Importe</Label>
          <Input placeholder="Escribe el monto" type="number"></Input>
        </div>
        <div className="flex flex-col w-1/8 mt-5">
          <Button>
            {" "}
            <Search className="mr-2" />
            Buscar
          </Button>
        </div>
      </div>
    </div>
  );
}
