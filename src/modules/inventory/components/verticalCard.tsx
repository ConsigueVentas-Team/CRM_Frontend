import { Card, CardTitle } from '@/components/ui/card'
import React, { useState } from 'react'
import { BorderStyle } from './borderStyle'
import { Producto } from '@/types/Producto'
interface VerticalProps{
    product:Producto
}

export const VerticalCard: React.FC<VerticalProps> = ({ product }) => {
    const [isLoading, setLoading] = useState(true);

    const imageClasses = `flex rounded-[20px] p-4 ${isLoading ? "scale-105 blur-lg" : "scale-100 blur-0"
        }`;
    return (
        <Card className='w-full'>
            <div className='flex md:flex-row sm:flex-col gap-4  items-center'>
                <img src={product.imagen}
                    onLoad={() => setLoading(false)}
                    className={imageClasses} width={"200px"} height={"180px"} ></img>
                <CardTitle >{product.nombre}</CardTitle>
                <BorderStyle categoria={product.categoria} />
                <p className="text-4xl">{"S/. " + product.precio}</p>
            </div>
        </Card>
    )
}
