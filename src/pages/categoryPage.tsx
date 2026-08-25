import { useParams, useNavigate } from "react-router-dom";
import CategorySection from "../components/categorySection";
import { Recipe } from "../types/recipes";

type CategoryPageProps = {
    recipes: Recipe[];
};

export default function CategoryPage({ recipes }: CategoryPageProps) {
    const { categoryKey } = useParams(); //vraća string ili undefined iz url-a, nakon :, {} je destrukturiranje objekta, jer useParams vraća objekt
    const navigate = useNavigate();

    if (!categoryKey) { 
        return <div>
            <h2>Kategorija nije pronađena.</h2>
            <button onClick={() => navigate('/')}>Natrag na početnu stranicu</button>
        </div>;
    }

    const categoryRecipes = recipes.filter(recipe => recipe.category === categoryKey);

    return(
        <div className="category-page">
            <CategorySection
                categoryKey={categoryKey} //treba zbog izvlačenja boja i labela iz constants.ts
                recipes={categoryRecipes}
            />
        </div>
    )
}