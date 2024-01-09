import { Card, CardTitle } from '@/components/ui/card'
import React from 'react'
import { BorderStyle } from './borderStyle'

export const VerticalCard = ({ product }) => {
    const estiloImagen = {
        width: '200px',
        height: '180px',
        objectFit: 'cover',
        borderRadius: '20px'
    };
    return (
        <Card className='w-full'>
            <div className='flex md:flex-row sm:flex-col gap-4  items-center'>
                <img style={estiloImagen} src={product.imagen} className='rounded-[20px] p-4' width={"150px"}></img>
                <CardTitle >{product.nombre}</CardTitle>
                <BorderStyle marca={product.marca} />
                <p className="text-4xl">{"S/. " + product.precio}</p>
            </div>
        </Card>
    )
}
