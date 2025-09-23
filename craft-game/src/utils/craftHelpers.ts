import type { RecipeItem } from "@typeData/types";
import { recipeItems } from "@data/recipeItems";

export const getMatchedRecipe = (cells: (RecipeItem | null)[]): RecipeItem | null => {
  return recipeItems.find((recipe) =>
    recipe.type === "crafted" &&
    recipe.ingredients?.every(
      (item, index) => (cells[index]?.id ?? null) === (item ?? null)
    )
  ) ?? null;
};
