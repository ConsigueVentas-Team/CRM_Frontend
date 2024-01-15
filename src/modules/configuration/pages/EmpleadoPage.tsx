import { useTitle } from '@/hooks/useTitle';
import React from 'react';

const EmpleadoPage: React.FC = () => {
  useTitle("Empleado");
  return (
    <div>
      <h2>Empleado</h2>
      <p>Contenido de la página de Empleado.</p>
    </div>
  );
};

export default EmpleadoPage;