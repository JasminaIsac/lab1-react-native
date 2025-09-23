import { recipeItems } from "@data/recipeItems";

type CraftableItem = typeof recipeItems[number];
export const getCraftableItems = (discovered: CraftableItem[]): CraftableItem[] => {
  console.log("discovered", discovered);
  return recipeItems.filter((item) => {
    if (item.type === "primary") return false;

    if (discovered.some((d) => d.id === item.id)) return false;

    if (!item.ingredients) return false;

    const allIngredientsAvailable = item.ingredients?.every((id) => {
      if (id === null) return true;
      const ingredient = recipeItems.find((i) => i.id === id);
      if (!ingredient) return false; 
      return ingredient.type === "primary" || discovered.some((d) => d.id === id);
    });

    return allIngredientsAvailable;
  }).slice(0, 3);
};