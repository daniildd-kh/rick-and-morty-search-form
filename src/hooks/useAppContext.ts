import { useContext } from "react";
import { AppContext } from "../context/app-context";

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error(
      "useAppContext должен использоваться внутри CharacterProvider"
    );
  }
  return context;
}
