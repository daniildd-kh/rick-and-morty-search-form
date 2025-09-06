export const STATUSES = {
  dead: "Мёртв",
  alive: "Жив",
  unknown: "Неизвестно",
} as const;

export type StatusType = keyof typeof STATUSES | "";

export const SPECIESES = {
  human: "Человек",
  poopybutthole: "Пупибатхол",
  aliene: "Bнопланетянин",
  humanoid: "Гуманоид",
  cronenberg: "Кроненберг",
  unknown: "Неизвестно",
} as const;

export type SpeciesType = keyof typeof SPECIESES | "";

export const GENDERS = {
  female: "Женский",
  male: "Мужской",
  genderless: "Бесполый",
  unknown: "Неизвестно",
} as const;

export type GenderType = keyof typeof GENDERS | "";

export interface Character {
  id: string;
  name: string;
  gender: GenderType;
  species: SpeciesType;
  status: StatusType;
  type: string;
  url: string;
  image: string;
  origin: {name: string};
  location: {name: string};
}
