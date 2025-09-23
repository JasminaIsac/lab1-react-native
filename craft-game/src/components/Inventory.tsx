import { useContext } from "react";
import type { RecipeItem } from "@typeData/types";
import { useInventory } from "@contexts/inventory/UseInventory";
import { DragContext } from "@contexts/dragdrop/DragContext";
import { useCraft } from "@contexts/craft/useCraft";
import InventorySlot from "@components/InventorySlot";

const Inventory = () => {
  const { inventory, setInventory } = useInventory();
  const { draggedItem, endDrag } = useContext(DragContext);

  const {removeItem} = useCraft();

  const gridSize = 48;
  const gridCells: (RecipeItem | null)[] = Array(gridSize).fill(null);

  inventory.forEach((item, index) => {
    if (index < gridSize) gridCells[index] = item;
  });

  const handleDrop = (index: number) => {
  if (!draggedItem) return;

  const updated = [...inventory];

  switch (draggedItem.source) {
    case "inventory": {
      if (draggedItem.sourceIndex !== undefined) {
        const temp = updated[index];
        updated[index] = draggedItem.item;
        updated[draggedItem.sourceIndex] = temp;
      }
      break;
    }

    case "craft": {
      if (!updated[index]) {
        updated[index] = draggedItem.item;
      } else {
        const temp = updated[index];
        updated[index] = draggedItem.item;
        const firstEmpty = updated.findIndex((i) => !i);
        if (firstEmpty !== -1) updated[firstEmpty] = temp;
        if (draggedItem.source === "craft" && draggedItem.sourceIndex !== undefined) {
          removeItem(draggedItem.sourceIndex);
        }
      }
      break;
    }

    case "resource": {
      if (!updated[index]) {
        updated[index] = { ...draggedItem.item };
      } else {
        const temp = updated[index];
        updated[index] = { ...draggedItem.item };
        const firstEmpty = updated.findIndex((i) => !i);
        if (firstEmpty !== -1) updated[firstEmpty] = temp;
      }
      break;
    }
  }

  setInventory(updated);
  endDrag();
};


  return (
    <div className="container-base w-full h-full flex-1 flex flex-col justify-center relative items-center">
      <h2 className="text-lg font-semibold mb-4">Inventory</h2>

      <div className="grid grid-cols-6 xl:grid-cols-12 gap-2">
        {gridCells.map((cell, index) => (
          <InventorySlot
            key={index}
            item={cell}
            index={index}
            handleDrop={handleDrop}
          />
        ))}
      </div>
    </div>
  );
};

export default Inventory;
