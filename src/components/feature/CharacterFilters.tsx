import { useEffect, useRef, useState, type ChangeEvent } from "react";
import { Input } from "../ui/input";
import { Select } from "../ui/select";
import { useDebounce } from "../../hooks/useDebounce";

const STATUSES = {
  dead: "Нет",
  alive: "Да",
  unknown: "Неизвестно",
} as const;

type StatusType = keyof typeof STATUSES | "";

const SPECIESES = {
  human: "Человек",
  poopybutthole: "Пупибатхол",
  aliene: "Bнопланетянин",
  humanoid: "Гуманоид",
  cronenberg: "Кроненберг",
  unknown: "Неизвестно",
} as const;

type SpeciesType = keyof typeof SPECIESES | "";

interface FormData {
  name: string;
  episode: string;
  status: StatusType;
  species: SpeciesType;
}

function CharacterFilters() {
const [formData, setFormData] = useState<FormData>({
    name: "",
    status: "",
    species: "",
    episode: "",
  });

  const debouncedData = useDebounce<FormData>(formData, 500);

  const fetchFormData = async (data: FormData) => {
    const baseUrl = `https://rickandmortyapi.com/api/character/`;
    const params = new URLSearchParams();
    Object.entries(data).forEach(([key, value]) => {
      if (value) {
        params.append(key, value);
      }
    });
    const query = params.toString();
    const url = query ? `${baseUrl}?${query}` : baseUrl;
    const response = await fetch(url);
    const result = await response.json();
    console.log(result);
  };

  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    fetchFormData(debouncedData);
  }, [debouncedData]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const statusOptions = [
    { value: "", label: "" },
    ...Object.entries(STATUSES).map(([value, label]) => ({ value, label })),
  ];

  const speciesOptions = [
    { value: "", label: "" },
    ...Object.entries(SPECIESES).map(([value, label]) => ({ value, label })),
  ];

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Вселенная Рик и Морти</h1>
      <form className="flex flex-col gap-4 w-[600px]">
        <Input
          label="Имя персонажа"
          placeholder="rick"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <Select
          label="Жив?"
          name="status"
          value={formData.status}
          options={statusOptions}
          onChange={handleChange}
        />
        <Select
          label="Раса"
          name="species"
          value={formData.species}
          options={speciesOptions}
          onChange={handleChange}
        />
        <Input
          label="Эпизод"
          name="episode"
          value={formData.episode}
          onChange={handleChange}
        />
      </form>
    </main>
  );
}

export default CharacterFilters;