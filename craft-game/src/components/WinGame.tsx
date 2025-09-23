import trophy from "@assets/trophy.png";
import Button from "@components/Button";

interface WinGameProps {
  onClick: () => void;
}

const WinGame = ({ onClick }: WinGameProps) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white dark:bg-teal-600 border-2 border-gray-200 dark:border-teal-400 rounded-xl shadow-lg max-w-[30vw] max-h-[80vh] overflow-y-auto relative flex flex-col items-center gap-8 p-6">
        <img src={trophy} alt="Win Game" className="w-32 h-auto" />
        <h1 className="text-2xl font-semibold text-center text-amber-600 dark:text-amber-300">✨  Congratulations!  ✨<br/>You are the ultimate Alchemist!🔮</h1>
        <p className="text-center text-lg dark:text-white">All recipes discovered. All mysteries unraveled. Now, brew a potion of endless caffeine… or unlock a portal to adventure beyond reality.</p>
        <Button type="primary" color="yellow" onClick={onClick} title="Play again" />
      </div>
    </div>
  );
};

export default WinGame;