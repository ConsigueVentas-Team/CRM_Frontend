import React from 'react'
import { Button } from "@/components/ui/button";
import { Search } from '@/components/ui/search';
import { AlignJustify, Clock9, Component, Filter, ListTree, Star } from 'lucide-react';
import { ChevronDown } from 'lucide-react';


const Bills = () => {
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
          <div className="mt-4 mt-2 overflow-x-auto">
              <div className="flex justify-between sm:overflow-x-auto">
                  <div className="flex">
                      <Button className="ml-4 shadow-lg">
                          <Filter />
                          Filtros
                          <ChevronDown />
                      </Button>
                      <Button className="mx-2 shadow-lg">
                          <AlignJustify />
                          Agrupar
                          <ChevronDown />
                      </Button>
                      <Button className="mr-4 shadow-lg">
                          <Star />
                          Favoritos
                          <ChevronDown />
                      </Button>
                  </div>
                  <div className='flex' >
                      <Button className="ml-4 shadow-lg">
                          <ListTree />
                      </Button>
                      <Button className="mx-2 shadow-lg">
                          <Component />
                      </Button>
                      <Button className="mr-4 shadow-lg">
                          <Clock9 />
                      </Button>
                  </div>
              </div>
              
          </div>
          <div className="mx-4 mt-2">
              {/*contenido que aun falta*/}
          </div>
      </div>
  )
}

export default Bills
