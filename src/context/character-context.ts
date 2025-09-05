import { createContext, type Dispatch, type SetStateAction } from "react";
import type { Character } from "../constants/characters";

type CharacterContextType = {
  characters: Character[] | null;
  setCharacters: Dispatch<SetStateAction<Character[] | null>>;
};

export const CharacterContext = createContext<CharacterContextType | null>(
  null
);
