import { useContext } from "react";
import { DiscoveredRecipesContext } from "@contexts/discovered/DiscoveredRecipesContext";

export const useDiscoveredRecipes = () => {
  const context = useContext(DiscoveredRecipesContext);
  if (!context) throw new Error("useDiscoveredRecipes must be used within a DiscoveredRecipesProvider");
  return context;
};
