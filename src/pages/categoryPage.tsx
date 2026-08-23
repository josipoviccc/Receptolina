import {useState} from "react";
import { useParams, useNavigate } from "react-router-dom";
import SearchBar from "../components/searchBar";
import CategorySection from "../components/categorySection";
import { Recipe } from "../types/recipes";

type CategoryPageProps = {
    recipes: Recipe[];
};

export default function CategoryPage({ recipes }: CategoryPageProps) {
    const { categoryKey } = useParams(); //vraća string ili undefined iz url-a, nakon :
    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();

    if (!categoryKey) { 
        return <div>
            <h2>Kategorija nije pronađena.</h2>
            <button onClick={() => navigate('/')}>Natrag na početnu stranicu</button>
        </div>;
    }

    const categoryRecipes = recipes.filter((recipe) => recipe.category === categoryKey);

    const filteredRecipes = categoryRecipes.filter((recipe) => {
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
                categoryKey={categoryKey}
                recipes={filteredRecipes}
            />
        </div>
    )
}