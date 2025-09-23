import { createContext } from "react";
import type { RecipeItem } from "@typeData/types";

export type CraftContextType = {
  cells: (RecipeItem | null)[];
  setCells: React.Dispatch<React.SetStateAction<(RecipeItem | null)[]>>;
  addItem: (item: RecipeItem) => boolean;
  clearGrid: () => void;
  removeItem: (index: number) => void;
  clearCraft: () => void;
};

export const CraftContext = createContext<CraftContextType | undefined>(undefined);
