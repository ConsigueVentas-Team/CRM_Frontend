import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export const HorizontalCard = ({ product,className }) => {
    return (
        <Card className={className}>
            <div className="flex flex-row">
                <img src={product.imagen} className='rounded-[20px] p-2' width={"150px"}></img>
                <div className="ml-2 mt-6">
                    <CardTitle>{product.nombre}</CardTitle>
                    <CardDescription>{product.marca}</CardDescription>
                    <p className="text-4xl">{"S/. " + product.precio}</p>
                </div>
            </div>
            
        </Card>
    )
}
