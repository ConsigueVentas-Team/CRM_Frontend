import { useTitle } from "@/hooks/useTitle";

export function HomePage() {
  useTitle("Inicio");

  return (
    <div>
      <h3 className="text-2xl">Inicio</h3>
    </div>
  );
}
