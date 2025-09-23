import { useState } from "react";
import type { RecipeItem } from "@typeData/types";
import type { HandleDropTypes } from "@typeData/handleDropTypes";

type Zone = "inventory" | "craft" | "result" | string;

interface DragData {
  item: RecipeItem;
  fromZone: Zone;
  fromIndex?: number | null;
}

export const useDragDrop = () => {
  const [draggedItem, setDraggedItem] = useState<DragData | null>(null);

  const handleDragStart =
    (item: RecipeItem, fromZone: Zone, fromIndex?: number) =>
    (event: React.DragEvent<HTMLDivElement>) => {
      const data: DragData = { item, fromZone, fromIndex };
      event.dataTransfer.setData("application/json", JSON.stringify(data));
      setDraggedItem(data);
    };

  const handleDrop = ( onDropCallback: (data: HandleDropTypes) => void, toZone: Zone, toIndex: number | null = null ) =>
  (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();

    const dataString = event.dataTransfer.getData("application/json");
    if (!dataString) return;

    const { item, fromZone, fromIndex } = JSON.parse(dataString) as DragData;
    onDropCallback?.({ item, fromZone, fromIndex: fromIndex ?? null, toZone, toIndex });
    setDraggedItem(null);
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return {
    draggedItem,
    handleDragStart,
    handleDrop,
    handleDragOver,
  };
};
