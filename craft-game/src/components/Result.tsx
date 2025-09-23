import { RecipeItem } from "@typeData/types";
import { ArrowIcon } from "@assets/ArrowIcon";
import Tile from "@components/Tile";

interface ResultProps {
  item: RecipeItem | null;
  onClick: (item: RecipeItem) => void;
}

const Result = ({ item, onClick }: ResultProps) => {
  if (item !== null) console.log('result', item);
  
  return (
    <div className="h-full flex justify-center items-center gap-6">
      <div className="mx-10">
        <ArrowIcon />
      </div>
      <div className="container-base w-24 h-24 flex items-center justify-center">
        <Tile item={item} size={20} onClick={item ? () => onClick(item) : undefined} />
      </div>
    </div>
  );
};

export default Result;
