import type { RecipeItem } from "@typeData/types";

interface TileProps {
  item: RecipeItem | null;
  size?: number;
  onClick?: (e: React.MouseEvent) => void;        
  onMouseDown?: (e: React.MouseEvent) => void;
  onMouseUp?: (e: React.MouseEvent) => void;
}

export const Tile = ({ item, size = 16, onClick, onMouseDown, onMouseUp }: TileProps) => {
  const tileClasses = `w-${size} h-${size} border-2 border-gray-300 dark:border-teal-600 rounded-lg 
    flex flex-shrink-0 items-center justify-center bg-white dark:bg-teal-700 cursor-pointer 
    transition-transform duration-200 hover:scale-105 shadow-md`;
  return (
    <div
      title={item?.name}
      onClick={onClick}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      className={tileClasses}
      style={{ width: `${size * 4}px`, height: `${size * 4}px` }}
    >
      {item && <img src={item.icon} alt={item.name} className="w-full h-full p-2" />}
    </div>
  );
};
