import type { FC } from "react";
import {
  GENDERS,
  SPECIESES,
  STATUSES,
  type Character,
} from "../../constants/characters";
import { User, Users, Activity, Shapes } from "lucide-react";

interface CharacterCardProps {
  character: Character;
  onClick: (character: Character) => void;
}

export const CharacterCard: FC<CharacterCardProps> = ({
  character,
  onClick,
}) => {
  const { name, gender, species, status, type } = character;

  return (
    <div
      onClick={() => onClick(character)}
      className="w-full min-h-[80px] p-2 border-2 border-black bg-pink text-text shadow-md cursor-pointer"
    >
      <div className="flex flex-col gap-1 h-full rounded-md bg-white border-2 w-full p-2">
        <p className="font-bold font-display">{name}</p>
        <div className="flex gap-4 flex-wrap text-sm items-center">
          <div className="flex items-center gap-1 text-blue">
            <User size={16} />
            <span>
              {gender
                ? GENDERS[gender.toLowerCase() as keyof typeof GENDERS]
                : "Не указан"}
            </span>
          </div>
          <div className="flex items-center gap-1 text-pink">
            <Users size={16} />
            <span>
              {species
                ? SPECIESES[species.toLowerCase() as keyof typeof SPECIESES]
                : "Не указана"}
            </span>
          </div>
          <div className="flex items-center gap-1 text-green-600">
            <Activity size={16} />
            <span>
              {status
                ? STATUSES[status.toLowerCase() as keyof typeof STATUSES]
                : "Не указан"}
            </span>
          </div>
          <div className="flex items-center gap-1 text-purple-600">
            <Shapes size={16} />
            <span>{type || "Не указан"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
