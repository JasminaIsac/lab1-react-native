// useDragDrop.ts
import { useContext, useEffect } from "react";
import { DragContext, type DragSource } from "./DragContext";
import type { RecipeItem } from "@typeData/types";

export const useDragDrop = (
  item: RecipeItem | null,
  source: DragSource,
  sourceIndex?: number,
  onDrop?: (x: number, y: number) => void
) => {
  const { startDrag, updateDrag, endDrag } = useContext(DragContext);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!item) return;
    startDrag(item, e.clientX, e.clientY, sourceIndex, source);
  };

  const handleMouseMove = (e: MouseEvent) => {
    updateDrag(e.clientX, e.clientY);
  };

  const handleMouseUp = (e: MouseEvent) => {
    if (onDrop) onDrop(e.clientX, e.clientY);
    endDrag();
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return { handleMouseDown };
};
