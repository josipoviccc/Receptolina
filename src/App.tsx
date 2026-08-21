import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import AllRecipes from "./data/allRecipes";
import RecipePage from "./pages/recipePage";
import CategoryPage from "./pages/categoryPage";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categoryPage/:categoryKey" element={<CategoryPage recipes={AllRecipes} />} /> //prosljeđuju se svi recepti, a filtriranje se događa u komponenti CategoryPage i RecipePage
        <Route path="/recipePage/:id" element={<RecipePage recipes={AllRecipes} />} />
      </Routes>
    </>
  );
}