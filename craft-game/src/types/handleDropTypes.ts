import type { RecipeItem } from "@typeData/types";

export type HandleDropTypes = {
    item: RecipeItem | null, 
    fromZone: string, 
    fromIndex: number | null, 
    toZone: string, 
    toIndex: number | null
};
