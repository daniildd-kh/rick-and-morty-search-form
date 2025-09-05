import type { FC } from "react";

interface CharacterCardProps{
    name: string;
    gender: string;
    species: string;
    status: string;
    type: string;
    url: string;
}

const CharacterCard: FC<CharacterCardProps> =({}) =>{
    return(
        <div className="flex gap-1 w-full h-6 px-2 py-1 rounded border-gray-200">
            
        </div>
    )
}