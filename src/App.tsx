import { CharacterProvider } from "./context/сharacter-provider";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <CharacterProvider>
      <SearchPage />
    </CharacterProvider>
  );
}

export default App;
