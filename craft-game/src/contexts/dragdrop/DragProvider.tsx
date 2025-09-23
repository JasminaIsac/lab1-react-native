// DragProvider.tsx
import { useState } from "react";
import { DragContext, type DragItem, type DragSource } from "./DragContext";
import type { RecipeItem } from "@typeData/types";

const DragProvider = ({ children }: { children: React.ReactNode }) => {
  const [draggedItem, setDraggedItem] = useState<DragItem | null>(null);

  const startDrag = (
    item: RecipeItem,
    x: number,
    y: number,
    sourceIndex?: number,
    source: DragSource = "resource"
  ) => {
    setDraggedItem({ item, x, y, sourceIndex, source });
  };

  const updateDrag = (x: number, y: number) =>
    setDraggedItem((d) => d && { ...d, x, y });

  const endDrag = () => setDraggedItem(null);

  return (
    <DragContext.Provider value={{ draggedItem, startDrag, updateDrag, endDrag }}>
      {children}
      {draggedItem && (
        <div
          style={{
            position: "fixed",
            left: draggedItem.x - 24,
            top: draggedItem.y - 24,
            pointerEvents: "none",
            width: 48,
            height: 48,
            zIndex: 1000,
          }}
        >
          <img src={draggedItem.item.icon} alt={draggedItem.item.name} className="w-full h-full" />
        </div>
      )}
    </DragContext.Provider>
  );
};

export default DragProvider;
