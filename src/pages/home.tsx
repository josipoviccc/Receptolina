import { useState } from "react";
import SearchBar from "../components/searchBar";
import CategorySection from "../components/categorySection";
import { AllRecipes as recipes } from "../data/allRecipes";
import { categories } from "../constants";

export default function HomePage() {
    const [searchQuery, setSearchQuery] = useState(""); //searchQuery je trenutni tekst u search baru, a setSearchQuery je funkcija koja mijenja searchQuery

    const filteredRecipes = recipes.filter((recipe) => {
        if (searchQuery.trim() === "") return true;
        try {
            const regex = new RegExp(searchQuery, "i"); //i znači da je case insensitive
            return (
                regex.test(recipe.title) ||
                recipe.tags.some((tag) => regex.test(tag))
            );
        } catch {
            return true;
        }
    });

    return (
        <div className="home-page">
            <SearchBar onSearch={setSearchQuery} />

            {categories.map((category) => {
                const categoryRecipes = filteredRecipes.filter(
                    (recipe) => recipe.category === category.key
                );

                if (categoryRecipes.length === 0) return null;
                                
                return (
                    <CategorySection
                        key={category.key} /* Služi reactu da kad stvara više sekcija, može ih razlikovati po key-u */
                        categoryKey={category.key}
                        recipes={categoryRecipes.slice(0, 4)}
                    />
                );
            })}
        </div>
    );
}