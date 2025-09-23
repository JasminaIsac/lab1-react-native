import { useContext } from "react";
import type { RecipeItem } from "@typeData/types";
import { DragContext } from "@contexts/dragdrop/DragContext";
import { useInventory } from "@contexts/inventory/UseInventory";
import CraftSlot from "@components/CraftSlot";

interface CraftGridProps {
  cells: (RecipeItem | null)[];
  setCells: React.Dispatch<React.SetStateAction<(RecipeItem | null)[]>>;
}

const CraftGrid = ({ cells, setCells }: CraftGridProps) => {
  const { draggedItem, endDrag } = useContext(DragContext);
  const { addItem: handleIngredientToInventory, removeItem: removeItemFromInventory } = useInventory();

  const handleDrop = (targetIndex: number) => {
    if (!draggedItem) return;

    setCells((prev) => {
      const updated = [...prev];

      switch (draggedItem.source) {
        case "craft": {
          if (draggedItem.sourceIndex !== undefined && draggedItem.sourceIndex !== targetIndex) {
            const sourceItem = updated[draggedItem.sourceIndex];
            const targetItem = updated[targetIndex];

            updated[targetIndex] = sourceItem;
            updated[draggedItem.sourceIndex] = targetItem;
          }
          break;
        }

        case "inventory": {
          updated[targetIndex] = { ...draggedItem.item };
          if (draggedItem.sourceIndex !== undefined) {
            removeItemFromInventory(draggedItem.sourceIndex);
          }
          break;
        }

        case "resource": {
          updated[targetIndex] = { ...draggedItem.item };
          break;
        }
      }

      return updated;
    });

    endDrag();
  };

  const handleClickCell = (index: number) => {
    const item = cells[index];
    if (!item) return;

    handleIngredientToInventory(item);
    setCells((prev) => {
      const newCells = [...prev];
      newCells[index] = null;
      return newCells;
    });
  };

  if (cells[2] !== null) console.log("cells", cells);

  return (
    <div className="p-2">
      <h1 className="text-xl font-bold text-center mb-4">Craft Game</h1>

      <div className="grid grid-cols-3 gap-2 container-base">
        {cells.map((cell, index) => (
          <CraftSlot
            key={index}
            item={cell}
            index={index}
            onClick={() => handleClickCell(index)}
            handleDrop={handleDrop}
          />
        ))}
      </div>
    </div>
  );
};

export default CraftGrid;
