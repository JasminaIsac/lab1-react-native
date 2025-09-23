import { useState, useEffect } from "react";
import type { RecipeItem } from "@typeData/types";
import { CraftContext } from "@contexts/craft/CraftContext";
import { swap } from "@utils/swap";

interface Props {
  children: React.ReactNode;
}

const STORAGE_KEY = "craftgrid";

export const CraftProvider = ({ children }: Props) => {
  const gridSize = 9;
  const [cells, setCells] = useState<(RecipeItem | null)[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) return JSON.parse(stored) as (RecipeItem | null)[];
    } catch (e) {
      console.error(e);
    }
    return Array(gridSize).fill(null);
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cells));
    } catch (e) {
      console.error(e);
    }
  }, [cells]);

  const clearGrid = () => setCells(Array(gridSize).fill(null));

  const addItem = (item: RecipeItem, index: number | null = null) => {
    const targetIndex = index !== null ? index : cells.findIndex(i => i === null);
    if (targetIndex === -1) return false;

    setCells(prev => {
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
      evictedItem = toIndex !== null ? cells[toIndex] : null;
      const success = addItem(itemFromOutside, toIndex);
      if (!success) return itemFromOutside;
    } else {
      if (fromIndex === null) return null;

      evictedItem = toIndex !== null ? cells[toIndex] : null;
      setCells(prev => swap(prev, fromIndex, toIndex));
    }

    return evictedItem;
  };


  const removeItem = (index: number) => {
    if (index < 0 || index >= cells.length) return;
    const updated = [...cells];
    updated[index] = null;
    setCells(updated);
  };

  const clearCraft = () => {
    setCells(Array(gridSize).fill(null));
  };

  return (
    <CraftContext.Provider value={{ cells, setCells, addItem, moveItemTo, clearGrid, removeItem, clearCraft }}>
      {children}
    </CraftContext.Provider>
  );
};
