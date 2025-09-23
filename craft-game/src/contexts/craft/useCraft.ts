import { useContext } from "react";
import { CraftContext } from "@contexts/craft/CraftContext";

export const useCraft = () => {
  const context = useContext(CraftContext);
  if (!context) throw new Error("useCraft must be used within a CraftProvider");
  return context;
};
