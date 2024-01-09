import React from 'react'
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { BorderStyle } from './borderStyle'


export const CardNormal = ({ product, className }) => {
    const estiloImagen = {
        width: '200px', 
        height: '180px', 
        objectFit: 'cover', 
        borderRadius: '20px'
    };  
  return (
      <Card className={className}>
          <CardHeader>
              <CardTitle >{product.nombre}</CardTitle>
              <BorderStyle marca={product.marca}/>
              <div className="text-2xl">{"S/. " + product.precio}</div>
          </CardHeader>
          <CardContent className={""}>
              <img style={estiloImagen} src={product.imagen} ></img>
          </CardContent>
      </Card>
  )
}
