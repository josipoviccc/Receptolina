import {useState} from "react";
import { useParams } from "react-router-dom";
import SearchBar from "../components/searchBar";
import CategorySection from "../components/categorySection";
import { categoriesConfig } from "../data/categoriesConfig";

export default function CategoryPage() {
    const { categoryKey } = useParams<{categoryKey: string }>();
    const [searchQuery, setSearchQuery] = useState("");

    if (!categoryKey || !categoriesConfig[categoryKey]) {
        return <div>Kategorija ne postoji.</div>;
    }

    const config = categoriesConfig[categoryKey];

    const filteredRecipes = config.recipes.filter((recipe) => {
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
                label={config.label}
                categoryKey={categoryKey}
                recipes={filteredRecipes}
            />
        </div>
    )
}