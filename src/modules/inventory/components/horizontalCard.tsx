import {
    Card,
    CardTitle,
} from "@/components/ui/card"
import { BorderStyle } from "./borderStyle"
import { Producto } from "@/types/Producto";
interface HorizontalProps {
    product: Producto;
    className?: string;
}

export const HorizontalCard: React.FC<HorizontalProps> = ({ product, className }) => {

    return (
        <Card className={className}>
            <div className="flex flex-row">
                <img  src={product.imagen} className='rounded-[20px] p-2' width={"200px"} height={"180px"} ></img>
                <div className="ml-2 mt-6">
                    <CardTitle>{product.nombre}</CardTitle>
                    <BorderStyle categoria={product.categoria} />
                    <p className="text-4xl">{"S/. " + product.precio}</p>
                </div>
            </div>
            
        </Card>
    )
}
