import { useEffect, useRef, useState, type ChangeEvent } from "react";
import { Input } from "../ui/input";
import { Select } from "../ui/select";
import { useDebounce } from "../../hooks/useDebounce";
import {
  SPECIESES,
  STATUSES,
  type SpeciesType,
  type StatusType,
} from "../../constants/characters";
import { useAppContext } from "../../hooks/useAppContext";
import { fetchCharacters } from "../../api/rick-and-morty-api";

interface FormData {
  name: string;
  episode: string;
  status: StatusType;
  species: SpeciesType;
}

function CharacterFilters() {
  const { setCharacters, setIsLoading, setError } = useAppContext();
  const initialData = {
    name: "",
    status: "",
    species: "",
    episode: "",
  };
  const [formData, setFormData] = useState<FormData>(() => {
    try {
      const savedData = localStorage.getItem("formData");
      if (savedData) {
        return JSON.parse(savedData);
      }
    } catch (error) {}
    return initialData;
  });

  const debouncedData = useDebounce<FormData>(formData, 300);
  const isFirstRender = useRef(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const characters = await fetchCharacters(debouncedData);
        setCharacters(characters);
      } catch (e) {
        if (e instanceof Error) {
          setError(e.message);
        }
        setCharacters([]);
      } finally {
        setIsLoading(false);
      }
    };

    if (isFirstRender.current) {
      isFirstRender.current = false;
      fetchData();
    } else {
      fetchData();
    }
  }, [debouncedData, setCharacters, setError, setIsLoading]);

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

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
      <form className="flex flex-col gap-2 bg-white p-6 border-2 border-black shadow-md">
        <Input
          label="Имя персонажа"
          placeholder="rick"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <div className="flex justify-between gap-2">
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
        </div>

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
