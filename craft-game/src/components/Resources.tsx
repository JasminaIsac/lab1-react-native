import { recipeItems } from "@data/recipeItems";
import type { RecipeItem } from "@typeData/types";
import ResourceTile from "@components/ResourceTile";

const Resources = () => {
  const primaryIngredients = recipeItems.filter(
    (item: RecipeItem) => item.type === "primary"
  );

  return (
    <div className="container-base">
      <h2 className="text-lg mb-8">Resources</h2>
      <div className="flex flex-col mt-2 space-y-2 items-center justify-center self-center">
        {primaryIngredients.map((item: RecipeItem) => (
          <ResourceTile key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Resources;
