import { useState, useEffect, ReactNode } from "react";
import type { RecipeItem } from "@typeData/types";
import { InventoryContext } from "@contexts/inventory/InventoryContext";

type Props = {
  children: ReactNode;
};

const STORAGE_KEY = "inventory";

const InventoryProvider = ({ children }: Props) => {
  const [inventory, setInventory] = useState<(RecipeItem | null)[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) return JSON.parse(stored) as (RecipeItem | null)[];
    } catch (e) {
      console.error(e);
    }
    return Array(48).fill(null);
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(inventory));
    } catch (e) {
      console.error(e);
    }
  }, [inventory]);


  const addItem = (item: RecipeItem, index?: number) => {
    if (index !== undefined) {
      if (index < 0 || index >= inventory.length || inventory[index] !== null) return false;
      const updated = [...inventory];
      updated[index] = item;
      setInventory(updated);
      return true;
    }
    const firstEmptyIndex = inventory.findIndex((i) => i === null);
    if (firstEmptyIndex === -1) {
      alert("Inventar plin!");
      return false;
    } else {
      const updated = [...inventory];
      updated[firstEmptyIndex] = item;
      setInventory(updated);
      return true;
    }
  };

  const removeItem = (index: number | null) => {
    if (index === null) return;
    if (index < 0 || index >= inventory.length) return;

    const updated = [...inventory];
    updated[index] = null;
    setInventory(updated);
  };

  const clearInventory = () => {
    setInventory(Array(48).fill(null));
  };

  return (
    <InventoryContext.Provider value={{ inventory, setInventory, addItem, removeItem, clearInventory }}>
      {children}
    </InventoryContext.Provider>
  );
};

export default InventoryProvider;
