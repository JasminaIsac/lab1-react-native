import { createContext } from "react";
import type { RecipeItem } from "@typeData/types";

export type DragSource = "inventory" | "craft" | "resource";

export type DragItem = {
  item: RecipeItem;
  x: number;
  y: number;
  sourceIndex?: number;
  source: DragSource; 
};

export type DragContextType = {
  draggedItem: DragItem | null;
  startDrag: (
    item: RecipeItem,
    x: number,
    y: number,
    sourceIndex?: number,
    source?: DragSource
  ) => void;
  updateDrag: (x: number, y: number) => void;
  endDrag: () => void;
};

export const DragContext = createContext<DragContextType>({
  draggedItem: null,
  startDrag: () => {},
  updateDrag: () => {},
  endDrag: () => {},
});
