import type { ReactNode } from "react";

interface ButtonProps {
  onClick?: () => void;
  title?: string;
  type?: "primary" | "secondary" | "outline" | "icon-only";
  disabled?: boolean;
  icon?: ReactNode;
  width?: string;
  color?: "red" | "blue" | "green" | "yellow";
}

const Button = ({ onClick, title, type = "primary", disabled = false, icon, width, color }: ButtonProps) => {
  const base = "flex items-center justify-center px-4 py-2 transition-all duration-200 cursor-pointer";

  const typeClasses: Record<string, string> = {
    primary: "text-white rounded-lg shadow-lg",
    secondary: "bg-gray-400 text-gray-800 hover:bg-gray-200 rounded-lg shadow-lg",
    outline: "w-10 h-10 flex-shrink-0 bg-transparent text-gray-400 border-2 border-transparent dark:text-white dark:border-transparent rounded-full hover:border-gray-400 dark:hover:border-white",
    "icon-only": "w-10 h-10 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-full shadow-lg",
  };

  const colorMap: Record<string, string> = {
    red: "bg-red-500 hover:bg-red-400",
    blue: "bg-blue-500 hover:bg-blue-400",
    green: "bg-green-500 hover:bg-green-400",
    yellow: "bg-yellow-500 hover:bg-yellow-400",
  };

  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : "";
  const widthClass = width && !["icon-only", "outline"].includes(type) ? width : "";

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${typeClasses[type]} ${color ? colorMap[color] : ""} ${disabledClasses} ${widthClass}`}
    >
      {icon && <span className={title ? "mr-2" : ""}>{icon}</span>}
      {title && <span className="font-bold">{title}</span>}
    </button>
  );
};

export default Button;
