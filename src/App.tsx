import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home"; 
import CategoryPage from "./pages/categoryPage";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categoryPage/:categoryKey" element={<CategoryPage />} />
      </Routes>
    </>
  );
}