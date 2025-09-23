import { useTheme } from "@contexts/theme/useTheme";
import Button from "@components/Button";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      onClick={toggleTheme}
      type="icon-only"
      width="w-12 h-12"
      title={theme === "dark" ? "🌙" : "☀️"}
    />
  );
};

export default ThemeSwitcher;
