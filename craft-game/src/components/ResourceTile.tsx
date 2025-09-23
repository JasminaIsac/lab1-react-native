import type { RecipeItem } from "@typeData/types";
import { useDragDrop } from "@contexts/dragdrop/useDragDrop";
import { useInventory } from "@contexts/inventory/UseInventory";
import { Tile } from "@components/Tile";


interface ResourceTileProps {
  item: RecipeItem;
}

const ResourceTile = ({ item }: ResourceTileProps) => {
  const { addItem: handleIngredientToInventory } = useInventory();
  const { handleMouseDown } = useDragDrop(item, 'resource', undefined);

  return (
    <Tile
      item={item}
      onClick={() => handleIngredientToInventory(item)}
      onMouseDown={handleMouseDown}
    />
  );
};

export default ResourceTile;