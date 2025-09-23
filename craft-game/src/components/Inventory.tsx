import type { RecipeItem } from "@typeData/types";
import { HandleDropTypes } from "@typeData/handleDropTypes";
import { useInventory } from "@contexts/inventory/UseInventory";
import { useCraft } from "@contexts/craft/useCraft";
import { useDragDrop } from "@hooks/useDragDrop";
import Tile from "./Tile";

const Inventory = () => {
  const { inventory, removeItem: removeItemFromInventory, moveItemTo } = useInventory();
  const { addItem: addItemToCraft, removeItem: removeItemFromCraft } = useCraft();
  const { handleDragStart, handleDrop, handleDragOver } = useDragDrop();

  const handleClick = (item : RecipeItem | null, index: number) => {
    if (!item) return;
    const addedSuccessfully = addItemToCraft(item);
    if (addedSuccessfully) removeItemFromInventory(index);
  };

  const handleDropOnTile = (data: HandleDropTypes) => {
    const { item, fromZone, fromIndex, toIndex } = data;

    if (fromZone === "craft") {
      const evictedItem = moveItemTo(null, toIndex, item);
      if (fromIndex !== null) removeItemFromCraft(fromIndex);

      if (evictedItem) {
      addItemToCraft(evictedItem, fromIndex);
      }
    }
    if (fromZone === "inventory") {
      moveItemTo(fromIndex, toIndex);
    }
    if (fromZone === "resources") {
      moveItemTo(null, toIndex, item);
    }
  };

  return (
    <div className="container-base w-full h-full flex-1 flex flex-col justify-center relative items-center">
      <h2 className="text-lg font-semibold mb-4">Inventory</h2>

      <div className="grid grid-cols-6 xl:grid-cols-12 gap-2">
        {inventory.map((item, index) => (
          <Tile
            key={index}
            size={20}
            item={item}
            onClick={() => handleClick(item, index)}
            onDragStart={item ? handleDragStart(item, "inventory", index) : undefined}
            onDrop={handleDrop(handleDropOnTile, "inventory", index)}
            onDragOver={handleDragOver}
          />
        ))}
      </div>
    </div>
  );
};

export default Inventory;
