import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { BorderStyle } from "./borderStyle"

export const HorizontalCard = ({ product, className }) => {
    const estiloImagen = {
        width: '200px',
        height: '180px',
        objectFit: 'cover',
        borderRadius: '20px'
    }; 
    return (
        <Card className={className}>
            <div className="flex flex-row">
                <img style={estiloImagen} src={product.imagen} className='rounded-[20px] p-2' width={"150px"}></img>
                <div className="ml-2 mt-6">
                    <CardTitle>{product.nombre}</CardTitle>
                    <BorderStyle marca={product.marca} />
                    <p className="text-4xl">{"S/. " + product.precio}</p>
                </div>
            </div>
            
        </Card>
    )
}
