import type { RecipeItem } from "@typeData/types";
import type { HandleDropTypes } from "@typeData/handleDropTypes";
import { useCraft } from "@contexts/craft/useCraft";
import { useInventory } from "@contexts/inventory/UseInventory";
import { useDragDrop } from "@hooks/useDragDrop";
import Tile from "@components/Tile";

const CraftGrid = ({ cells }: { cells: (RecipeItem | null)[] }) => {
  // const { draggedItem, endDrag } = useContext(DragContext);
  const { removeItem:removeItemFromCraft, moveItemTo } = useCraft();
  const { addItem:addItemToInventory, removeItem:removeItemFromInventory } = useInventory();
  const { handleDrop, handleDragOver, handleDragStart } = useDragDrop();

  const handleDropOnTile = (data: HandleDropTypes) => {
    const { item, fromZone, fromIndex, toIndex } = data;

    if (fromZone === "inventory") {
      const evictedItem = moveItemTo(null, toIndex, item);
      if (fromIndex !== null) removeItemFromInventory(fromIndex);

      if (evictedItem) {
        addItemToInventory(evictedItem, fromIndex);
      }
    }
    if (fromZone === "craft") {
      moveItemTo(fromIndex, toIndex);
    }
  };

  const handleClick = (item: RecipeItem | null, index: number) => {
    if (!item) return;
    const addedSuccessfully = addItemToInventory(item);
    if (addedSuccessfully) removeItemFromCraft(index);
  };

  return (
    <div className="p-2">
      <h1 className="text-xl font-bold text-center mb-4">Craft Game</h1>

      <div className="grid grid-cols-3 gap-2 container-base">
        {cells.map((item, index) => (
          <Tile
            key={index}
            item={item ?? null}
            size={20}
            onClick={() => handleClick(item, index)}
            onDrop={handleDrop(handleDropOnTile, "craft", index)}
            onDragOver={handleDragOver}
            onDragStart={item ? handleDragStart(item, "craft", index) : undefined}
          />
        ))}
      </div>
    </div>
  );
};

export default CraftGrid;
