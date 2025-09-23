import { RecipeItem } from "@typeData/types";
import { CloseIcon } from "@assets/CloseIcon";
import Button from "@components/Button";
import Tile from "./Tile";

interface ItemDetailsProps {
  item: RecipeItem;
  onClose: () => void;
}

const ItemDetails = ({ item, onClose } : ItemDetailsProps) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white dark:bg-teal-800 border-2 border-gray-200 dark:border-teal-300 rounded-lg shadow-lg max-w-[80vw] max-h-[80vh] overflow-y-auto relative">
        <div className="sticky top-0 left-0 w-full flex justify-between items-center px-4 pt-2 bg-white dark:bg-teal-800 z-10">
          <h2 className="text-lg font-semibold mr-6">Item Details</h2>
          <Button 
            type="outline" 
            onClick={onClose} 
            icon={<CloseIcon />} 
            width="w-6"
          />
        </div>
        
          { item && (
            <div className="flex flex-col gap-2 px-6 py-4 items-center">
              <Tile item={item} size={24} onClick={undefined} details={false} />
              <div className="flex flex-col mt-4">
                <h2 className="text-xl font-semibold text-center mb-4">{item.name}</h2>
                <div className="border-3 border-green-200 bg-green-50 dark:bg-teal-700 dark:border-teal-600 rounded-2xl p-4 mb-2">
                    <p className="text-md italic">{item.description}</p>
                </div>
                
              </div>
            </div>
          )}
        
      </div>
    </div>
  );
};

export default ItemDetails;