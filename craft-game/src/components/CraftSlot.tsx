import { Tile } from "./Tile";
import type { RecipeItem } from "@typeData/types";
import { useDragDrop } from "@contexts/dragdrop/useDragDrop";

interface Props {
  item: RecipeItem | null;
  index: number;
  onClick?: (e: React.MouseEvent) => void;
  handleDrop: (index: number) => void;
}

const CraftSlot = ({ item, index, handleDrop, onClick }: Props) => {
  const dragProps = useDragDrop(item, "craft", index);

  return (
    <Tile
      item={item ?? null}
      size={20}
      onClick={onClick}
      onMouseDown={item ? dragProps.handleMouseDown : undefined}
      onMouseUp={() => handleDrop(index)}
    />
  );
};

export default CraftSlot;
