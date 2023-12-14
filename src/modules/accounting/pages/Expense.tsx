import React from 'react'
import { Button } from "@/components/ui/button";
import { Search } from '@/components/ui/search';
import { AlignJustify, Filter } from 'lucide-react';
import { ChevronDown } from 'lucide-react';
import { useTitle } from '@/hooks/useTitle';


const Expense = () => {
    useTitle("Gastos");
    return (
        <div className="w-full bg-background">
            <div className="my-4 md:flex md:justify-between  sm:flex-row">
                <div className="flex md:justify-star sm:flex justify-center mb-2">
                    <Button className="mx-4 shadow-lg">
                        Crear Gastos
                    </Button>
                    <Button className="mx-4 shadow-lg">
                        <p className="underline"> Importar Gastos</p>
                    </Button>
                </div>
                <div className='mx-8  md:w-1/3' >
                    <div>
                        <Search icon="Search" />
                    </div>
                </div>
            </div>
            <div className="mt-4 overflow-x-auto">
                <div className="flex justify-between sm:overflow-x-auto">
                    <div className="flex">
                        <Button className="ml-4 shadow-lg">
                            <Filter className="mr-3" />
                            Filtros
                            <ChevronDown className="ml-3" />
                        </Button>
                        <Button className="mx-2 shadow-lg">
                            <AlignJustify className="mr-3" />
                            Agrupar
                            <ChevronDown className="ml-3" />
                        </Button>
                    </div>
                </div>

            </div>
            <div className="mx-4 mt-2">
            </div>
        </div>
    )
}

export default Expense
