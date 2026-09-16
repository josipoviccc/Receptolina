import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import RecipePage from "./pages/recipePage";
import CategoryPage from "./pages/categoryPage";
import { useRecipes } from "./hooks/useRecipes";

export default function App() {
  const { recipes, loading, error } = useRecipes();

  if (loading) return <p>Učitavanje...</p>;
  if (error) return <p>Greška: {error}</p>;

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categoryPage/:categoryKey" element={<CategoryPage recipes={recipes} />} />
        <Route path="/recipePage/:id" element={<RecipePage recipes={recipes} />} />
      </Routes>
    </>
  );
}