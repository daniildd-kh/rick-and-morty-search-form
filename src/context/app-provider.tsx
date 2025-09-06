import { useState, type ReactNode } from "react";
import type { Character } from "../constants/characters";
import { AppContext } from "./app-context";

export function AppProvider({ children }: { children: ReactNode }) {
  const [characters, setCharacters] = useState<Character[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const value = {
    characters,
    setCharacters,
    isLoading,
    setIsLoading,
    error,
    setError,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
