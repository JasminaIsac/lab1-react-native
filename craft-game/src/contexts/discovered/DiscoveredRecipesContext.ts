import { createContext } from "react";
import type { RecipeItem } from "@typeData/types";

export interface RecipesContextType {
  discovered: RecipeItem[];
  addDiscovered: (item: RecipeItem) => void;
  hasDiscovered: (id: number) => boolean;
  clearDiscovered: () => void;
}

export const DiscoveredRecipesContext = createContext<RecipesContextType | undefined>(undefined);
