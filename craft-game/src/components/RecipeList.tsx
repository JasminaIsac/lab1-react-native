import { ReadyToCraftRecipe } from "@components/ReadyToCraftRecipe";
import { useDiscoveredRecipes } from "@contexts/discovered/useDiscoveredRecipes";
import { getCraftableItems } from "@utils/getCraftableItems";

const RecipeList = () => {
  const { discovered } = useDiscoveredRecipes();
  const readyToCraftItems = getCraftableItems(discovered);

  return (
    <div className="container-base w-full box-border">
        <h2 className="text-lg text-center">Ready to craft</h2>
        <div className="flex flex-col gap-2 mt-4">
            {readyToCraftItems.map((item) => (
            <ReadyToCraftRecipe key={item.id} recipe={item} />
            ))}
        </div>
    </div>
  );
};

export default RecipeList;