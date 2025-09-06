import CharacterFilters from "../components/feature/character-filters";
import { CharacterList } from "../components/feature/character-list";

function SearchPage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full max-w-[800px] flex flex-col gap-6">
        <CharacterFilters />
        <CharacterList />
      </div>
    </div>
  );
}

export default SearchPage;
