import type { RecipeItem } from "@typeData/types";
import { useDragDrop } from "@contexts/dragdrop/useDragDrop";
import { useCraft } from "@contexts/craft/useCraft";
import { useInventory } from "@contexts/inventory/UseInventory";
import { Tile } from "@components/Tile";

interface Props {
  item: RecipeItem | null;
  index: number;
  handleDrop: (index: number) => void;
}

const InventorySlot = ({ item, index, handleDrop }: Props) => {
  const dragProps = useDragDrop(item, "inventory", index);
  const { addItem } = useCraft();
  const { removeItem: removeItemFromInventory } = useInventory();

  const handleAddtoCraft = () => {
    if (item) {
      const added = addItem(item);
      if (added) removeItemFromInventory(index)
    }
  };

  return (
    <Tile
      item={item ?? null}
      size={20}
      onMouseDown={item ? dragProps.handleMouseDown : undefined}
      onMouseUp={() => handleDrop(index)}
      onClick={handleAddtoCraft}
    />
  );
};

export default InventorySlot;
