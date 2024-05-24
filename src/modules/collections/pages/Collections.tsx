
import React from 'react';
import { CollectionTable } from '../components/CollectionTable';

const Collections: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Gestión de Cobros</h1>
      <p>Supervisar y administrar todas las transacciones de manera eficiente.</p>
      <CollectionTable />
    </div>
  );
};

export default Collections;