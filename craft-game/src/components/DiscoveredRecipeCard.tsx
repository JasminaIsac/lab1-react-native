import type { RecipeItem } from "@typeData/types";
import { recipeItemIcons } from "@assets/RecipeItemsIcons";
import Tile from "./Tile";

const DiscoveredRecipeCard = ({ item }: { item: RecipeItem }) => {
  return (
    <div className="flex flex-col bg-gray-200 dark:bg-teal-600 rounded-lg shadow-md p-4 transition-colors duration-300 mb-4">
      <div className="flex flex-row items-center mb-4">
        <Tile item={item} size={16} onClick={undefined} details={false} />
        <div className="flex flex-col ml-4">
          <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
          <p className="text-sm">{item.description}</p>
          <div className="w-fit bg-green-200 px-2 py-1 rounded-full text-xs font-semibold text-green-900 my-2">
            ✅ Discovered
          </div>
        </div>
      </div>

      <div>
        <h4 className="text-sm font-semibold mb-2">Ingredients:</h4>
        <div className="flex flex-row flex-wrap">
            {item.ingredients?.map((ingredientId: number | null, index: number) => (
                <div
                key={index}
                className={`w-12 h-12 flex items-center justify-center rounded m-1
                    ${ingredientId
                    ? "bg-white border-2 border-gray-300 dark:bg-teal-700 dark:border-teal-500 shadow-sm"
                    : "bg-gray-100 border-2 border-dotted border-gray-400 dark:bg-[#0E8A7F] dark:border-teal-500"}
                    ${index % 3 === 2 ? "mr-4" : ""}  // după fiecare al 3-lea element
                `}
                >
                {ingredientId && (
                  <img
                    src={recipeItemIcons[ingredientId]}
                    alt={item.name}
                    className="w-8 h-8 object-contain"
                  />
                )}
                </div>
            ))}
        </div>

      </div>
    </div>
  );
};

export default DiscoveredRecipeCard;
