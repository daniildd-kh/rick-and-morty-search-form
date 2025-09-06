import type { FC } from "react";
import type { Character } from "../../constants/characters";

interface CharacterDetailProps {
  character: Character;
}

export const CharacterDetail: FC<CharacterDetailProps> = ({ character }) => {
  const { name, image, status, species, gender, origin, location } = character;

  return (
    <div className="flex flex-col sm:flex-row sm:gap-8 gap-2">
      <div className="flex-shrink-0 w-48">
        <img
          src={image}
          alt={name}
          className="w-48 h-48 rounded-lg object-cover border-2 border-black shadow-md"
        />
        <h2 className="text-subtitle font-bold text-text text-wrap">
          {name}
        </h2>
      </div>

      <div className="flex flex-col gap-2 text-text">
        <div>
          <p className="text-sm font-medium text-text/50">Статус</p>
          <div className="text-base">
            <p>{status}</p>
          </div>
        </div>

        <div>
          <p className="text-sm font-medium text-text/50">Раса</p>
          <p className="text-base">{species}</p>
        </div>

        <div>
          <p className="text-sm font-medium text-text/50">Пол</p>
          <p className="text-base">{gender}</p>
        </div>

        <div>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Происхождение
          </p>
          <p className="text-base">{origin.name}</p>
        </div>

        <div>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Последняя локация
          </p>
          <p className="text-base">{location.name}</p>
        </div>
      </div>
    </div>
  );
};
