import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/HomePage";
import NotFound from "./pages/NotFoundPage";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import PokemonDetailsPage from "./pages/PokemonDetailsPage";

function App() {
  return (
    <>
      <Navbar />

      <div className="app-container">
        <Sidebar />

        <div className="page">
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/pokemon-details/:pokemonName"} element={<PokemonDetailsPage />} />

            {/* error handling routes */}
            <Route path={"*"} element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
