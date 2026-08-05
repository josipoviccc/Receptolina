import TitleSection from "../components/categoryComponents/titleSection";
import SearchBar from "../components/searchBar";
import { useState } from "react";
import { SavoryRecipes as recipes } from "../data/savoryRecipes";

export default function SavoryRecipesPage() {
        const [searchQuery, setSearchQuery] = useState("");
    
        const filteredRecipes = recipes.filter((recipe) => {
            if (searchQuery.trim() === "") return true;
            try {
                const regex = new RegExp(searchQuery, "i");
                return (
                    regex.test(recipe.title) ||
                    recipe.tags.some((tag) => regex.test(tag))
                );
            } catch {
                return true;
            }
        });
    

    return (
        <div>
            <SearchBar onSearch={setSearchQuery} />
            <TitleSection label="Slani recepti" categoryKey="slano" />
        </div>
    );
}