import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export const CardNormal = ({ product,className }) => {
  return (
      <Card className={className}>
          <CardHeader>
              <CardTitle>{product.nombre}</CardTitle>
              <CardDescription>{product.marca}</CardDescription>
              <CardDescription className="text-2xl">{"S/. "+product.precio}</CardDescription>
          </CardHeader>
          <CardContent>
              <img src={product.imagen} className='rounded-[20px]'></img>
          </CardContent>
      </Card>
  )
}
