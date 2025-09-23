import { createContext } from "react";
import type { RecipeItem } from "@typeData/types";

export type InventoryContextType = {
  inventory: (RecipeItem | null)[];
  setInventory: (inventory: (RecipeItem | null)[]) => void;
  addItem: (item: RecipeItem, index?: number | null ) => boolean;
  moveItemTo: (fromIndex: number | null, toIndex: number | null, itemFromOutside?: RecipeItem | null) => RecipeItem | null;
  removeItem: (index: number) => void;
  clearInventory: () => void;
};

export const InventoryContext = createContext<InventoryContextType | undefined>(undefined);
