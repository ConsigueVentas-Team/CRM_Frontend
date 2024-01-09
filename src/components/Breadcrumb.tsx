import { ArrowLeft } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface RouteNames {
  [key: string]: string;
}

const routeNames: RouteNames = {
  file: "Archivos",
  reports: "Informes",
  invoice: "Facturas",
  expense: "Gastos",
  proforma: "Proformas",
  "proforma/create": "Crear Proforma",
  users: "Usuarios",
  dashboard: "Tablero",
  clients: " ",
};

export function Breadcrumb() {
  const location = useLocation();
  const segments = location.pathname.split("/").filter(Boolean);
  const items = segments.map((segment, index, array) => {
    const route =  array.slice(0, index + 1).join("/");
    const name = routeNames[route] || segment.charAt(0).toUpperCase() + segment.slice(1);
    return { name, route };
  });

  return (
    <div className="flex items-center gap-2">
      {/* {items.length > 1 && <ArrowLeft className="text-primary" />} */}
      {items.map((item, index) => (
        <div key={index} className="text-lg">
          {index < items.length - 1 ? (
            <Link to={item.route} className="text-primary">
              {item.name} 
            </Link>
          ) : (
            <span className="text-foreground">{item.name}</span>
          )}
          {index < items.length - 1 && (
            <span className="text-muted-foreground"> /</span>
          )}
        </div>
      ))}
    </div>
  );
}