import { useState } from "react";
import SearchBar from "../components/searchBar";
import CategorySection from "../components/categorySection";
import { AllRecipes as recipes } from "../data/allRecipes";

const categories = [
    { key: "slano", label: "Slano" },
    { key: "slatko", label: "Slatko" },
    { key: "pecivo", label: "Peciva" },
    { key: "umaci", label: "Umaci" },
] as const;

export default function HomePage() {
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
        <div className="home-page">
            <SearchBar onSearch={setSearchQuery} />

            {categories.map((cat) => {
                const categoryRecipes = filteredRecipes.filter(
                    (recipe) => recipe.category === cat.key
                );

                if (categoryRecipes.length === 0) return null;

                return (
                    <CategorySection
                        key={cat.key}
                        label={cat.label}
                        categoryKey={cat.key}
                        recipes={categoryRecipes}
                    />
                );
            })}
        </div>
    );
}