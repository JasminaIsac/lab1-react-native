import { useState } from "react";
import { recipeItems } from "@/data/recipeItems";
import { useDiscoveredRecipes } from "@contexts/discovered/useDiscoveredRecipes";
import { useResetGame } from "@hooks/useResetGame";
import { CloseIcon } from "@assets/CloseIcon";
import { ListIcon } from "@assets/ListIcon";
import DiscoveredRecipe from "@components/DiscoveredRecipeCard";
import Button from "@components/Button";
import WinGame from "@components/WinGame";

const DiscoveredRecipes = () => {
    const { discovered } = useDiscoveredRecipes();
    const [isOpen, setIsOpen] = useState(false);
    const { resetGame } = useResetGame();

    const winnedGame = discovered.find((item) => item.id === recipeItems.length);
    
    return (
      <>
        <Button
          onClick={() => setIsOpen(true)}
          type="icon-only"
          width="w-12 h-12"
          icon={<ListIcon />}
        />
        {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white dark:bg-teal-800 border-2 border-gray-200 dark:border-teal-300 rounded-lg shadow-lg max-w-[80vw] max-h-[80vh] overflow-y-auto relative">
            <div className="sticky top-0 left-0 w-full flex justify-between items-center p-4 bg-white dark:bg-teal-700 z-10 shadow rounded-t-lg">
              <h2 className="text-lg font-semibold mr-6">Discovered Recipes</h2>
              <Button 
                type="outline" 
                onClick={() => setIsOpen(false)} 
                icon={<CloseIcon />} 
                width="w-6"
              />
            </div>

            <div className="flex flex-col gap-2 px-6 py-4">
              { discovered.length === 0 ? (
                <p className="text-gray-500 dark:text-gray-300">No discovered recipes yet.</p>
              ) : (
                discovered.map((recipe) => (
                  <DiscoveredRecipe key={recipe.id} item={recipe} />
                ))
              )}
            </div>
          </div>
        </div>
        )}

        {winnedGame && <WinGame onClick={resetGame} />}
      </>
     );
      
}

export default DiscoveredRecipes;