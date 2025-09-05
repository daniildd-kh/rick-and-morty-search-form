export const STATUSES = {
  dead: "Нет",
  alive: "Да",
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

export interface Character {
    name: string;
    gender: string;
    species: SpeciesType;
    status: StatusType;
    type: string;
    url: string;
    img: string;
}