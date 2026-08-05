import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home"; // prilagodi putanju svom fajlu
import SweetRecipesPage from "./pages/sweetRecipes";
import SavoryRecipesPage from "./pages/savoryRecipes";
import PastryRecipesPage from "./pages/pastryRecipes";
import SaucesRecipesPage from "./pages/saucesRecipes";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sweetRecipes" element={<SweetRecipesPage />} />
        <Route path="/savoryRecipes" element={<SavoryRecipesPage />} />
        <Route path="/pastryRecipes" element={<PastryRecipesPage />} />
        <Route path="/saucesRecipes" element={<SaucesRecipesPage />} />
      </Routes>
    </>
  );
}

export default App;