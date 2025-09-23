import { useState } from "react";
import { HandleDropTypes } from "@typeData/handleDropTypes";
import { useInventory } from "@contexts/inventory/UseInventory";
import { useCraft } from "@contexts/craft/useCraft";
import { useResetGame } from "@hooks/useResetGame";
import { useDragDrop } from "@hooks/useDragDrop";
import { IconTrash, IconReset } from "@assets/TrashIcons";
import Button from "@components/Button";

const Garbage = () => {
  const { removeItem: removeItemFromInventory, clearInventory } = useInventory();
  const { removeItem: removeItemFromCraft } = useCraft();
  const { handleDrop, handleDragOver } = useDragDrop();
  const { resetGame} = useResetGame();
    const [isDragOver, setIsDragOver] = useState(false);

  const handleDropOnGarbage = (data: HandleDropTypes) => {
    const { fromZone, fromIndex } = data;
    if (fromZone === "craft" && fromIndex !== null) {
      removeItemFromCraft(fromIndex);
    }
    if (fromZone === "inventory" && fromIndex !== null) {
      removeItemFromInventory(fromIndex);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div
        onDrop={(e) => {
          handleDrop(handleDropOnGarbage, "garbage")(e);
          setIsDragOver(false);
        }}
        onDragOver={(e) => {
          handleDragOver(e);
          setIsDragOver(true);
        }}
        onDragEnter={() => setIsDragOver(true)}
        onDragLeave={() => setIsDragOver(false)}
        className={`w-36 flex-1 flex-col h-full p-2 rounded-xl border-2 border-dashed shadow-md 
          border-red-800 dark:border-red-200
          transition-all duration-200
          ${isDragOver ? "scale-105 bg-red-300 dark:bg-red-700" : "bg-red-200 dark:bg-red-900 "}`}
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