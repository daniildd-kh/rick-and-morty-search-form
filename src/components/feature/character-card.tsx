import {
  GENDERS,
  SPECIESES,
  STATUSES,
  type Character,
} from "../../constants/characters";

export const CharacterCard = ({ character }: { character: Character }) => {
  const { name, gender, species, status, type } = character;

  return (
    <div className="flex items-center gap-2 w-full px-3 py-2 rounded-lg border border-gray-200 bg-white">
      <p className="font-bold">{name}:</p>

      <p className="text-sm ">
        {gender
          ? GENDERS[gender.toLowerCase() as keyof typeof GENDERS]
          : "Пол не указан"}
      </p>

      <p className="text-sm ">
        {species
          ? SPECIESES[species.toLowerCase() as keyof typeof SPECIESES]
          : "Раса не указана"}
      </p>

      <p className="text-sm ">
        {status
          ? STATUSES[status.toLowerCase() as keyof typeof STATUSES]
          : "Статус не указан"}
      </p>

      <p className="text-sm">{type || "Тип не указан"}</p>
    </div>
  );
};
