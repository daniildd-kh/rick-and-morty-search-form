import { AppProvider } from "./context/app-provider";
import SearchPage from "./pages/search-page";

function App() {
  return (
    <AppProvider>
      <SearchPage />
    </AppProvider>
  );
}

export default App;
