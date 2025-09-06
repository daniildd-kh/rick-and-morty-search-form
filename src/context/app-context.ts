import { createContext, type Dispatch, type SetStateAction } from "react";
import type { Character } from "../constants/characters";

export type AppContextType = {
  characters: Character[] | null;
  isLoading: boolean;
  error: string | null;
  setCharacters: Dispatch<SetStateAction<Character[] | null>>;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setError: Dispatch<SetStateAction<string | null>>;
};

export const AppContext = createContext<AppContextType | null>(null);
