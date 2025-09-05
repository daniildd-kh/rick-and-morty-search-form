import CharacterFilters from "../components/feature/character-filters";
import { CharacterList } from "../components/feature/character-list";

function SearchPage() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <CharacterFilters />
      <CharacterList />
    </div>
  );
}

export default SearchPage;
