import { useState, useEffect } from "react";
import type { RecipeItem } from "@typeData/types";
import { CraftContext } from "@contexts/craft/CraftContext";

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

  const addItem = (item: RecipeItem) => {
    const firstEmptyIndex = cells.findIndex((c) => c === null);
    if (firstEmptyIndex === -1) return false;

    const updated = [...cells];
    updated[firstEmptyIndex] = item;
    setCells(updated);
    return true;
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
    <CraftContext.Provider value={{ cells, setCells, addItem, clearGrid, removeItem, clearCraft }}>
      {children}
    </CraftContext.Provider>
  );
};
