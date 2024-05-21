
import React from 'react';
import { CollectionTable } from '../components/CollectionTable';

const Collections: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Modulo Cobros</h1>
      <p>Esta es una página de prueba para el módulo de cobros.</p>
      <CollectionTable />
    </div>
  );
};

export default Collections;
