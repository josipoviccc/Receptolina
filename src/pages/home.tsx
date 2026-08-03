import { useState } from "react";
import RecipeCard from "../components/recipeCard";
import SearchBar from "../components/searchBar";
import {Recipes as recipes } from "../data/recipesData";

const categories = [
  { key: "slano", label: "Slano" },
  { key: "slatko", label: "Slatko" },
  { key: "pecivo", label: "Peciva" },
] as const;

export default function Home() {
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
                    (recipe) => recipe.category === cat.key);

                if (categoryRecipes.length === 0) return null;

                return (
                    <div key={cat.key} className="category-section">
                        <h2>{cat.label}</h2>
                        <div className="recipe-grid">
                            {categoryRecipes.map((recipe) => (
                                <RecipeCard
                                    key={recipe.id}
                                    id={recipe.id}
                                    link={`/recipes/${recipe.id}`}
                                    cover={recipe.cover}
                                    title={recipe.title}
                                    minutes={recipe.minutes}
                                    tags={recipe.tags}
                                    category={recipe.category}
                                    risingTime={recipe.risingTime}
                                    coolingTime={recipe.coolingTime}
                                />
                            ))}
                        </div>
                    </div>
                );
            })}
        </div>
    )

}