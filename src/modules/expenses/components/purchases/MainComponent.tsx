// MainComponent.tsx
import { useState, useEffect } from "react";
import { ItemDataTable } from "./ItemDataTable";
import { PurchaseActions } from "./PurchaseActions";
import { Item as ItemDetail } from '@/types/purchase';

export function MainComponent() {
  const [items, setItems] = useState<ItemDetail[]>([]);

  const handleDeleteItem = (name: string) => {
    setItems(items.filter(item => item.name !== name));
  };

  return (
    <>
      <PurchaseActions onItemsChange={setItems} />
      <ItemDataTable data={items} handleDelete={handleDeleteItem} isLoading={false} />
    </>
  );
}