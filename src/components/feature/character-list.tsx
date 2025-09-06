import { useState } from "react";
import { useAppContext } from "../../hooks/useAppContext";
import { CharacterCard } from "./character-card";
import type { Character } from "../../constants/characters";
import { Modal } from "../ui/modal";
import { CharacterDetail } from "./character-detail";

export const CharacterList = () => {
  const { characters, isLoading, error } = useAppContext();

  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(
    null
  );

  if (isLoading) {
    return <p className="text-center p-10">Загрузка персонажей...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500 p-10">Ошибка: {error}</p>;
  }

  if (!characters || characters.length === 0) {
    return (
      <p className="text-center p-10">
        Для поиска по персонажам используйте форму
      </p>
    );
  }

  const handleCardClick = (character: Character) => {
    setSelectedCharacter(character);
  };

  const handleCloseModal = () => {
    setSelectedCharacter(null);
  };

  return (
    <div>
      <h2 className="text-subtitle font-bold">Найдено:</h2>
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
    </div>
  );
};
