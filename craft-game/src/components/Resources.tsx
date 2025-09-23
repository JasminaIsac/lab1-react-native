import { recipeItems } from "@data/recipeItems";
import type { RecipeItem } from "@typeData/types";
import { useDragDrop } from "@hooks/useDragDrop";
import { useInventory } from "@contexts/inventory/UseInventory";
import Tile from "./Tile";

const Resources = () => {
  const {handleDragStart, handleDragOver} = useDragDrop();
  const { addItem: addItemToInventory } = useInventory();
  const primaryIngredients = recipeItems.filter(
    (item: RecipeItem) => item.type === "primary"
  );

  return (
    <div className="container-base">
      <h2 className="text-lg mb-8">Resources</h2>
      <div className="flex flex-col mt-2 space-y-2 items-center justify-center self-center">
        {primaryIngredients.map((item, index) => (
          <Tile 
              key={index} 
              item={item} 
              onClick={() => addItemToInventory(item)}
              onDragOver={handleDragOver}
              onDragStart={handleDragStart(item, "resources", index)}
              />
        ))}
      </div>
    </div>
  );
};

export default Resources;
