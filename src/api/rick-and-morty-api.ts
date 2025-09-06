import { type SpeciesType, type StatusType } from "../constants/characters";

export interface CharacterQuery {
  name?: string;
  episode?: string;
  status?: StatusType | "";
  species?: SpeciesType | "";
}

export async function fetchCharacters(query: CharacterQuery) {
  const baseUrl = `https://rickandmortyapi.com/api/character/`;
  const params = new URLSearchParams();

  Object.entries(query).forEach(([key, value]) => {
    if (value) params.append(key, value);
  });

  const url = params.toString() ? `${baseUrl}?${params}` : baseUrl;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Персонажи не найдены (ошибка ${response.status})`);
  }

  const result = await response.json();

  if (result.error) {
    throw new Error(result.error);
  }

  return result.results || [];
}
