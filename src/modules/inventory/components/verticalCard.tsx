import { Card, CardTitle, CardDescription } from '@/components/ui/card'
import React from 'react'

export const VerticalCard = ({ product}) => {
    return (
        <Card className='w-full'>
            <div className='flex flex-row'>
                <CardTitle>{product.nombre}</CardTitle>
                <CardDescription>{product.marca}</CardDescription>
                <p className="text-4xl">{"S/. " + product.precio}</p>
            </div>
        </Card>
    )
}
