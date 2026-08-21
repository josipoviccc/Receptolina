import { useNavigate } from "react-router-dom";
import { Recipe } from "../../types/recipes";

interface RecipePageHeaderProps {
    recipe: Recipe;
}
export default function RecipePageHeader({ recipe }: RecipePageHeaderProps) {
    const navigate = useNavigate();
    return (
        <div className="recipe-page-header">
            <button onClick={() => navigate(-1)} className="recipe-page-link">
                &larr; Natrag
            </button>
            <img src={recipe.image} alt={recipe.title} className="recipe-page-image" />
        </div>
    );
}