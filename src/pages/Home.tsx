import { useTitle } from "@/hooks/useTitle";

export function HomePage() {
    useTitle("Inicio");
    return(
        <h3 className="text-2xl">Inicio</h3>
    )
}