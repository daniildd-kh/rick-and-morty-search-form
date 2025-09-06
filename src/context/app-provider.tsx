import { useState, type ReactNode } from "react";
import type { Character } from "../constants/characters";
import { AppContext } from "./app-context";

export function AppProvider({ children }: { children: ReactNode }) {
  const [characters, setCharacters] = useState<Character[] | null>(null);
  const value = { characters, setCharacters };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}
