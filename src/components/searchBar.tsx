import { useState } from "react";
import { AllRecipes as recipes } from "../data/allRecipes";

type SearchBarProps = {
    onSearch: (query: string) => void;
};

export default function SearchBar({ onSearch }: SearchBarProps) {

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

    const [value, setValue] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        onSearch(e.target.value);
    };
    return (
        <div className="search-bar">
            <input 
                className="search-input"
                type="text"
                placeholder="Pretraži recepte..."
                value={value}
                onChange={handleChange}
            />
        </div>
    );
};
