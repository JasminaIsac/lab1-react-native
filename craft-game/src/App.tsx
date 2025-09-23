import './App.css';
import RecipeList from '@components/RecipeList';
import Resources from '@components/Resources';
import Garbage from '@components/Garbage';
import Inventory from '@components/Inventory';
import CraftArea from '@components/CraftArea';
import DiscoveredRecipes from '@components/DiscoveredRecipes';
import ThemeSwitcher from '@components/ThemeSwitcher';

function App() {
  return (
    <div className="flex flex-col w-screen h-screen p-4 bg-green-100 dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen min-w-screen">
      <div className="h-full w-full flex gap-6">
        <div className="w-1/4 p-2flex flex-col">
          <RecipeList />
        </div>

        <div className="flex-1 p-2 rounded flex justify-center items-center">
          <CraftArea />
          <div className="absolute top-4 right-4 flex gap-2 items-center justify-center">
            <DiscoveredRecipes />
            <ThemeSwitcher />
          </div>
        </div>
      </div>

      <div className="h-full w-full flex gap-6">
        <Resources />
        <div className='flex-1 flex flex-col'>
          <Inventory />
        </div>
          <Garbage />
      </div>
    </div>
  );
}

export default App;
