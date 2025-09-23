import { useState } from "react";
import type { RecipeItem } from "@typeData/types";
import ItemDetails from "@components/ItemDetails";

interface TileProps {
  item: RecipeItem | null;
  size?: number;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  onDragStart?: (e: React.DragEvent<HTMLDivElement>) => void;
  onDrop?: (e: React.DragEvent<HTMLDivElement>) => void;
  onDragOver?: (e: React.DragEvent<HTMLDivElement>) => void;
  details?: boolean;
}

const Tile = ({ item, size = 16,  onClick, onDragStart, onDrop, onDragOver, details = true }: TileProps) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [showDetails, setShowDetails] = useState(false); 

  const tileClasses = `w-${size} h-${size} border-2 border-gray-300 dark:border-teal-600 rounded-lg 
    flex flex-shrink-0 items-center justify-center bg-white dark:bg-teal-700 cursor-pointer 
    transition-transform duration-200 hover:scale-105 shadow-md 
    ${isDragOver ? "ring-2 ring-gray-400 dark:ring-teal-400 scale-105" : ""}`;

   return (
    <>
      <div
        title={item?.name}
        className={tileClasses}
        style={{ width: `${size * 4}px`, height: `${size * 4}px` }}
        onClick={onClick}
        onContextMenu={(e) => {
          e.preventDefault();
          if (details && item) {
            setShowDetails(true);
          }
        }}
        draggable={!!onDragStart}
        onDragStart={onDragStart}
        onDrop={(e) => {
          if (onDrop) onDrop(e);
          setIsDragOver(false);
        }}
        onDragOver={(e) => {
          if (onDragOver) onDragOver(e);
          setIsDragOver(true);
        }}
        onDragEnter={() => setIsDragOver(true)}
        onDragLeave={() => setIsDragOver(false)}
      >
        {item && <img src={item.icon} alt={item.name} className="w-full h-full object-contain p-2" />}
      </div>

      {showDetails && item && (
        <ItemDetails item={item} onClose={() => setShowDetails(false)} />
      )}
    </>
  );
};

export default Tile;