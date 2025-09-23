import { useEffect, useState } from "react";
import { RecipeItem } from "@typeData/types";
import { useDiscoveredRecipes } from "@contexts/discovered/useDiscoveredRecipes";
import { useCraft } from "@contexts/craft/useCraft";
import { useInventory } from "@/contexts/inventory/UseInventory";
import { getMatchedRecipe } from "@utils/craftHelpers";
import CraftGrid from "@components/CraftGrid";
import Result from "@components/Result";

const CraftArea = () => {    
    const { cells, setCells, clearGrid } = useCraft();
    const [result, setResult] = useState<RecipeItem | null>(null);
    const { addItem: handleAddToInventory } = useInventory();
    const { addDiscovered } = useDiscoveredRecipes();

    const handleClick = ( item: RecipeItem ) => {
        handleAddToInventory(item);
        setResult(null);
        clearGrid();
        addDiscovered(item);
    };

    useEffect(() => {
    const matched = getMatchedRecipe(cells);
    setResult(matched ?? null);
    }, [cells]);

    return(
        <div className="flex-1 flex gap-4 p-4 items-center justify-center">
            <CraftGrid cells={cells} setCells={setCells} />
            <Result item={result} onClick={handleClick}/>
        </div>
    )
}

export default CraftArea;