import { createContext } from "react";
import type { RecipeItem } from "@typeData/types";

export type InventoryContextType = {
  inventory: (RecipeItem | null)[];
  setInventory: (inventory: (RecipeItem | null)[]) => void;
  addItem: (item: RecipeItem, index?: number) => boolean;
  removeItem: (index: number) => void;
  clearInventory: () => void;
};

export const InventoryContext = createContext<InventoryContextType | undefined>(undefined);
