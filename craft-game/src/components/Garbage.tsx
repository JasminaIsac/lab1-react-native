import { useContext } from "react";
import { DragContext } from "@contexts/dragdrop/DragContext";
import { useInventory } from "@contexts/inventory/UseInventory";
import { useResetGame } from "@/hooks/useResetGame";
import { IconTrash, IconReset } from "@assets/TrashIcons";
import Button from "@components/Button";

const Garbage = () => {
  const { removeItem, clearInventory } = useInventory();
  const { draggedItem, endDrag } = useContext(DragContext);
  const { resetGame } = useResetGame();

  const handleDrop = () => {
    if(!draggedItem) return
    if(draggedItem.source == "inventory") {
      if (draggedItem?.sourceIndex !== undefined) {
        removeItem(draggedItem.sourceIndex);
        endDrag();
      }
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div
        onDragOver={(ev) => ev.preventDefault()}
        onMouseUp={handleDrop}
        className="w-36 flex-1 flex-col h-full p-2 rounded-xl border-2 border-dashed border-red-800 dark:border-red-200 bg-red-200 dark:bg-red-900 shadow-md"
      >
        <h2 className="text-lg mb-4 text-center text-red-800 dark:text-red-200">Garbage</h2>
      </div>
      <div className="flex flex-col gap-2">
        <Button
          title="Clear Inventory"
          type="primary"
          color="red"
          icon={<IconTrash />}
          onClick={() => clearInventory()}
        />
        <Button
          title="Reset Game"
          type="secondary"
          icon={<IconReset />}
          onClick={() => resetGame()}
        />
      </div>
    </div>
  );
};

export default Garbage;