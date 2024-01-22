import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
  SheetContent,
  SheetFooter,
  SheetTitle,
} from "@/components/ui/sheet";
import { CategoriaDetail as CategoriaDetailType } from "@/types/auth";
import { Pencil, Trash } from "lucide-react";
import CategoriaDataEditable from "./CategoriaDataEditable";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CategoriaSchema } from "@/lib/validators/categoria";
import { z } from "zod";
import api from "@/services/api";
import { fetchCategorias } from '../api/apiService';
interface Props {
  categoria: CategoriaDetailType;



}

export function CategoriaDetail({ categoria }: Props) {



  const [editedName, setEditedName] = useState(categoria.name);
  const [editedDescription, setEditedDescription] = useState(categoria.description);
  const [editedColor, setEditedColor] = useState(categoria.color);



  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedName(e.target.value);
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedDescription(e.target.value);
  };

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedColor(Number(e.target.value));
  };

  const onEditCategoria = async () => {
    try {
      const requestBody = {
        name: editedName,
        description: editedDescription,
        color: editedColor,
      };
      const response = await api.put(`categories/update/${categoria.id}`, requestBody);
      if (response.status === 200) {
        console.log('Categoría actualizada exitosamente.');
      } else {
        console.error('Error al actualizar la categoría. Estado de respuesta:', response.status);
      }
    } catch (error) {
      console.error('Error al intentar actualizar la categoría:', error);
    }
  };


  const onDeleteCategoria = async () => {
    try {
      const response = await api.delete(`categories/delete/${categoria.id}`);
      if (response.status === 200) {
        console.log('Categoría eliminada exitosamente.');
      } else {
        console.error('Error al eliminar la categoría. Estado de respuesta:', response.status);
      }
    } catch (error) {
      console.error('Error al intentar eliminar la categoría:', error);
    }
  };
  return (
    <SheetContent>
      <SheetTitle>Información del categoria</SheetTitle>
      <div className="pt-8">
        <div className="flex flex-col items-center gap-4">


          <div className="mt-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Nombre:
            </label>
            <input
              type="text"
              value={editedName}
              onChange={handleNameChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mt-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Descripción:
            </label>
            <input
              type="text"
              value={editedDescription}
              onChange={handleDescriptionChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mt-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Color:
            </label>
            <input
              type="number"
              value={editedColor}
              onChange={handleColorChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        </div>
      </div>
      <SheetFooter className="mt-8 md:mt-3 sm:justify-center gap-9">
        <Button onClick={onEditCategoria} type="button"
        >

          <Pencil className="mr-2 h-4 w-4" aria-hidden="true" />
          Editar
        </Button>
        <Button onClick={onDeleteCategoria} type="button" variant="destructive"

        >
          <Trash className="mr-2 h-4 w-4" aria-hidden="true" />
          Eliminar
        </Button>
      </SheetFooter>
    </SheetContent>
  );
}
