import { useCharacters } from "../../hooks/useCharacters";
import { CharacterCard } from "./character-card";

export const CharacterList = () => {
  const { characters } = useCharacters();
  return (
    <div className="flex flex-col gap-2">
      {characters?.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
};
