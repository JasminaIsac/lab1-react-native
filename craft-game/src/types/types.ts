export interface RecipeItem {
  id: number;
  type: 'primary' | 'crafted';
  name: string;
  description: string;
  ingredients?: RecipeGrid;
  icon?: string;
}
export type GridCell = (number | null | RecipeItem["id"]);

export type RecipeGrid = [
  GridCell, GridCell, GridCell,
  GridCell, GridCell, GridCell,
  GridCell, GridCell, GridCell
];

