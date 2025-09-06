import { useState } from "react";
import { useCharacters } from "../../hooks/useCharacters";
import { CharacterCard } from "./character-card";
import type { Character } from "../../constants/characters";
import { Modal } from "../ui/modal";
import { CharacterDetail } from "./character-detail";

export const CharacterList = () => {
  const { characters } = useCharacters();

  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(
    null
  );

  const handleCardClick = (character: Character) => {
    setSelectedCharacter(character);
  };

  const handleCloseModal = () => {
    setSelectedCharacter(null);
  };

  return (
    <>
      <div className="flex flex-col gap-6 w-full">
        {characters?.map((character) => (
          <CharacterCard
            key={character.id}
            character={character}
            onClick={handleCardClick}
          />
        ))}
      </div>
      <Modal isOpen={!!selectedCharacter} onClose={handleCloseModal}>
        {selectedCharacter && <CharacterDetail character={selectedCharacter} />}
      </Modal>
    </>
  );
};
