import { useState, type ReactNode } from "react";
import type { Character } from "../constants/characters";
import { CharacterContext } from "./character-context";

export function CharacterProvider({children}: {children: ReactNode}){
    const [characters, setCharacters] = useState<Character[] | null>(null)
    const value = {characters, setCharacters}

    return(
        <CharacterContext.Provider value={value}>
            {children}
        </CharacterContext.Provider>
    ) 
}