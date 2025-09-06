import { createContext, type Dispatch, type SetStateAction } from "react";
import type { Character } from "../constants/characters";

type AppContextType = {
  characters: Character[] | null;
  setCharacters: Dispatch<SetStateAction<Character[] | null>>;
};

export const AppContext = createContext<AppContextType | null>(
  null
);
