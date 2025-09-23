import { useState, useEffect, ReactNode } from "react";
import type { RecipeItem } from "@typeData/types";
import { InventoryContext } from "@contexts/inventory/InventoryContext";
import { swap } from "@utils/swap";

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


  // const addItem = (item: RecipeItem, index?: number) => {
  //   if (index !== undefined) {
  //     if (index < 0 || index >= inventory.length || inventory[index] !== null) return false;
  //     const updated = [...inventory];
  //     updated[index] = item;
  //     setInventory(updated);
  //     return true;
  //   }
  //   const firstEmptyIndex = inventory.findIndex((i) => i === null);
  //   if (firstEmptyIndex === -1) {
  //     alert("Inventar plin!");
  //     return false;
  //   } else {
  //     const updated = [...inventory];
  //     updated[firstEmptyIndex] = item;
  //     setInventory(updated);
  //     return true;
  //   }
  // };

  const addItem = (item: RecipeItem, index: number | null = null) => {
    const targetIndex = index !== null ? index : inventory.findIndex(i => i === null);
    if (targetIndex === -1) return false;

    setInventory(prev => {
      const updated = [...prev];
      updated[targetIndex] = item;
      return updated;
    });

    return true;
  };

  // Mută un item între sloturi sau plasează un item din exterior
  const moveItemTo = (fromIndex: number| null, toIndex: number | null, itemFromOutside: RecipeItem | null = null) => {
    if (fromIndex === toIndex) return null;

    let evictedItem: RecipeItem | null = null;

    if (itemFromOutside) {
      evictedItem = toIndex !== null ? inventory[toIndex] : null;
      const success = addItem(itemFromOutside, toIndex);
      if (!success) return itemFromOutside;
    } else {
      if (fromIndex === null) return null;

      evictedItem = toIndex !== null ? inventory[toIndex] : null;
      setInventory(prev => swap(prev, fromIndex, toIndex));
    }

    return evictedItem;
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
    <InventoryContext.Provider value={{ inventory, setInventory, addItem, moveItemTo, removeItem, clearInventory }}>
      {children}
    </InventoryContext.Provider>
  );
};

export default InventoryProvider;
