import { ChevronRight } from "lucide-react";

export function SaleCard() {
  return (
    <div className="flex">
      <button className="bg-primary text-white p-6 rounded-l-lg flex items-center justify-center">
        Ver detalles
        <ChevronRight />
      </button>
      <div className="bg-white rounded-tr-lg rounded-br-lg shadow-lg p-6 flex-grow">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className="text-xl font-bold">Nombre producto</h3>
            <p className="text-gray-500">Hace 2 horas</p>
          </div>
          <div>
            <span className="text-green-500 text-2xl font-bold">S/ 500.00</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-500">Cliente:</p>
            <p className="font-bold">Jhon Doe</p>
          </div>
          <div>
            <p className="text-gray-500">Vendedor:</p>
            <p className="font-bold">Unknow</p>
          </div>
        </div>
      </div>
    </div>
  );
}
