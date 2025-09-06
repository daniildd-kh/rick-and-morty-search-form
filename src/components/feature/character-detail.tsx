import type { FC } from "react";
import type { Character } from "../../constants/characters";

interface CharacterDetailProps {
  character: Character;
}

export const CharacterDetail: FC<CharacterDetailProps> = ({ character }) => {
  const { name, image, status, species, gender, origin, location } = character;

  return (
    <div className="flex flex-col sm:flex-row gap-8 font-sans">
      <div className="flex-shrink-0">
        <img
          src={image}
          alt={name}
          className="w-48 h-48 rounded-lg shadow-xl object-cover border-4 border-white dark:border-gray-700"
        />
        <h2 className="mt-4 text-3xl font-bold font-display text-center text-gray-900 dark:text-white">
          {name}
        </h2>
      </div>

      <div className="flex flex-col gap-4 text-gray-800 dark:text-gray-200">
        <div>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Статус
          </p>
          <div className="flex items-center text-lg">
            <p>{status}</p>
          </div>
        </div>

        <div>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Раса
          </p>
          <p className="text-lg">{species}</p>
        </div>

        <div>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Пол
          </p>
          <p className="text-lg">{gender}</p>
        </div>

        <div>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Происхождение
          </p>
          <p className="text-lg">{origin.name}</p>
        </div>

        <div>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Последняя локация
          </p>
          <p className="text-lg">{location.name}</p>
        </div>
      </div>
    </div>
  );
};
