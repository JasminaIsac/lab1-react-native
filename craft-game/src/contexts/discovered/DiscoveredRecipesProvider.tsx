import { useState, useEffect } from "react";
import type { ReactNode } from "react";
import type { RecipeItem } from "@typeData/types";
import { DiscoveredRecipesContext } from "@contexts/discovered/DiscoveredRecipesContext";

const STORAGE_KEY = "discoveredRecipes";

export const DiscoveredRecipesProvider = ({ children }: { children: ReactNode }) => {
  const [discovered, setDiscovered] = useState<RecipeItem[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) return JSON.parse(stored) as RecipeItem[];
    } catch (e) {
      console.error(e);
    }
    return [];
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(discovered));
    } catch (e) {
      console.error(e);
    }
  }, [discovered]);

  const addDiscovered = (item: RecipeItem) => {
    setDiscovered((prev) => {
      if (!prev.some((r) => r.id === item.id)) return [...prev, item];
      return prev;
    });
  };

  const hasDiscovered = (id: number) => {
    return discovered.some((r) => r.id === id);
  };
  
  const clearDiscovered = () => {
    setDiscovered([]);
  }

  return (
    <DiscoveredRecipesContext.Provider value={{ discovered, addDiscovered, hasDiscovered, clearDiscovered }}>
      {children}
    </DiscoveredRecipesContext.Provider>
  );
};
