import { CharacterProvider } from "./context/сharacter-provider";
import SearchPage from "./pages/search-page";

function App() {
  return (
    <CharacterProvider>
      <SearchPage />
    </CharacterProvider>
  );
}

export default App;
