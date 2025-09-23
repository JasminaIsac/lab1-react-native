import type { RecipeItem } from "@typeData/types";
import Tile from "@components/Tile";

type NewRecipeProps = {
  recipe: RecipeItem;
};

export const ReadyToCraftRecipe = ({ recipe }: NewRecipeProps) => {
  return (
    <>
    <div className="flex gap-2 w-full rounded-xl bg-white dark:bg-teal-800 dark:border-2 dark:border-dashed  dark:border-teal-600 shadow-md p-2">
        <Tile item={recipe} size={14} />
        <div className="flex flex-col justify-start">
            <h3 className="text-md font-semibold mb-1">{recipe.name}</h3>
            <p className="text-xs">{recipe.description}</p>
        </div>
    </div>
    </>
    );
};  
