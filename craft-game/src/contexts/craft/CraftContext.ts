import { createContext } from "react";
import type { RecipeItem } from "@typeData/types";

export type CraftContextType = {
  cells: (RecipeItem | null)[];
  setCells: React.Dispatch<React.SetStateAction<(RecipeItem | null)[]>>;
  addItem: (item: RecipeItem, index?: number | null ) => boolean;
  moveItemTo: (fromIndex: number | null, toIndex: number | null, itemFromOutside?: RecipeItem | null) => RecipeItem | null;
  clearGrid: () => void;
  removeItem: (index: number) => void;
  clearCraft: () => void;
};

export const CraftContext = createContext<CraftContextType | undefined>(undefined);
