import { useContext } from "react";
import { CharacterContext } from "../context/character-context";

export function useCharacters() {
  const context = useContext(CharacterContext);
  if (!context) {
    throw new Error(
      "useCharacters должен использоваться внутри CharacterProvider"
    );
  }
  return context;
}
