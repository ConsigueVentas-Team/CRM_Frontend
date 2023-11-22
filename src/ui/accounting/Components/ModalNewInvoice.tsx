import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";

function NewInvoice({
    modal,
    fechaEmision,
    setFechaEmision,
    serie,
    setSerie,
    numero,
    setNumero,
    ruc,
    setRuc,
    razSocial,
    setRazSocial,
    dirección,
    setDirección,
    descripcion,
    setDescripcion,
    monto,
    setMonto,
    moneda,
    setMoneda,
    estado,
    setEstado,
    alert,
    handleCloseModal,
    handleAddInvoice,
    handleMonedaChange,
    handleEstadoChange
  }: {
    modal: boolean;
    fechaEmision: string;
    setFechaEmision: React.Dispatch<React.SetStateAction<string>>;
    serie: string;
    setSerie: React.Dispatch<React.SetStateAction<string>>;
    numero: string;
    setNumero: React.Dispatch<React.SetStateAction<string>>;
    ruc: string;
    setRuc: React.Dispatch<React.SetStateAction<string>>;
    razSocial: string;
    setRazSocial: React.Dispatch<React.SetStateAction<string>>;
    dirección: string;
    setDirección: React.Dispatch<React.SetStateAction<string>>;
    descripcion: string;
    setDescripcion: React.Dispatch<React.SetStateAction<string>>;
    monto: string;
    setMonto: React.Dispatch<React.SetStateAction<string>>;
    moneda: string;
    setMoneda: React.Dispatch<React.SetStateAction<string>>;
    estado: string;
    setEstado: React.Dispatch<React.SetStateAction<string>>;
    alert: string;
    handleCloseModal: () => void;
    handleAddInvoice: () => void;
    handleMonedaChange: (value: string) => void;
    handleEstadoChange: (value: string) => void;
  }){

return(
    <div>
                        <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-50"></div>
                        <Card className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 max-w-screen-sm p-8 rounded-md shadow-md z-50">
                            <CardHeader className="flex items-center">
                                <CardTitle className="text-xl">AGREGAR NUEVA FACTURA</CardTitle>
                                {alert && <p className="text-red-500">{alert}</p>}
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-row">
                                    <div className="p-2">
                                        <Label>Fecha de Emisión</Label>
                                        <Input
                                            type="date"
                                            value={fechaEmision}
                                            onChange={(e) => setFechaEmision(e.target.value)}
                                        ></Input>
                                    </div>
                                    <div className="p-2">
                                        <Label>Serie</Label>
                                        <Input
                                            type="text"
                                            value={serie}
                                            onChange={(e) => setSerie(e.target.value)}
                                        ></Input>
                                    </div>
                                    <div className="p-2">
                                        <Label>Número</Label>
                                        <Input
                                            type="number"
                                            value={numero}
                                            onChange={(e) => setNumero(e.target.value)}
                                        ></Input>
                                    </div>
                                </div>
                                <div className="flex flex-row">
                                    <div className="p-2">
                                        <Label>Ruc</Label>
                                        <Input
                                            type="number"
                                            value={ruc}
                                            onChange={(e) => setRuc(e.target.value)}
                                        ></Input>
                                    </div>
                                    <div className="p-2">
                                        <Label>Razón Social</Label>
                                        <Input
                                            type="text"
                                            value={razSocial}
                                            onChange={(e) => setRazSocial(e.target.value)}
                                        ></Input>
                                    </div>
                                    <div className="p-2">
                                        <Label>Dirección</Label>
                                        <Input
                                            type="text"
                                            value={dirección}
                                            onChange={(e) => setDirección(e.target.value)}
                                        ></Input>
                                    </div>
                                </div>
                                <div className="p-2">
                                    <Label>Descripción</Label>
                                    <Textarea
                                        placeholder="Escribe Aquí"
                                        value={descripcion}
                                        onChange={(e) => setDescripcion(e.target.value)}
                                    />
                                </div>
                                <div className="flex flex-row">
                                    <div className="p-2">
                                        <Label>Monto</Label>
                                        <Input
                                            type="number"
                                            value={monto}
                                            onChange={(e) => setMonto(e.target.value)}
                                        ></Input>
                                    </div>
                                    <div className="p-2">
                                        <Label>Moneda</Label>
                                        <Select value={moneda} onValueChange={(value) => handleMonedaChange(value)}>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Selecciona" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectItem value="soles">Soles</SelectItem>
                                                    <SelectItem value="dolares">Dolares</SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="p-2">
                                        <Label>Estado</Label>
                                        <Select value={estado}  onValueChange={(value) => handleEstadoChange(value)}>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Selecciona" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectItem value="PAGADO">Pagado</SelectItem>
                                                    <SelectItem value="PENDIENTE">Pendiente</SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter className="pt-2 pl-8 pr-8">
                                <div className="w-full flex justify-between">
                                    <Button onClick={handleCloseModal} className="w-1/3">
                                        CERRAR
                                    </Button>
                                    <Button className="w-1/3" onClick={handleAddInvoice}>
                                        AGREGAR
                                    </Button>
                                </div>
                            </CardFooter>
                        </Card>
                    </div>
)
}
export default NewInvoice;