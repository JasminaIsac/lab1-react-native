import { useInventory } from "@contexts/inventory/UseInventory";
import { useCraft } from "@contexts/craft/useCraft";
import { useDiscoveredRecipes } from "@contexts/discovered/useDiscoveredRecipes";

export const useResetGame = () => {
  const { clearInventory } = useInventory();
  const { clearCraft } = useCraft();
  const { clearDiscovered } = useDiscoveredRecipes();

  const resetGame = () => {
    clearInventory();
    clearCraft();
    clearDiscovered();
  };

  return { resetGame };
};
