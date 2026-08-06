import {useState} from "react";
import SearchBar from "../components/searchBar";
import CategorySection from "../components/categorySection";
import { Recipe } from "../types/recipes";

type CategoryPageProps = {
    recipes: Recipe[];
    label: string;
    categoryKey: string;
};

export default function CategoryPage({ recipes, label, categoryKey }: CategoryPageProps) {
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
    return(
        <div className="category-page">
            <SearchBar onSearch={setSearchQuery} />
            <CategorySection
                key={categoryKey}
                label={label}
                categoryKey={categoryKey}
                recipes={filteredRecipes}
            />
        </div>
    )
}