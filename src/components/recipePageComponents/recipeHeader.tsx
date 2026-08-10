import { useNavigate, useParams } from "react-router-dom";
import { Recipe } from "../../types/recipes";
import { category_colors } from "../../constants";

interface RecipePageHeaderProps {
    recipe: Recipe;
}
export default function RecipePageHeader({ recipe }: RecipePageHeaderProps) {
    const navigate = useNavigate();
    const accentColor = category_colors[recipe.category] ; 
    return (
        <div className="recipe-page-header">
            <button onClick={() => navigate(-1)} className="recipe-page-link">
                <h4 style={{ color: accentColor }}>&larr; Natrag</h4>
            </button>
            <img src={recipe.image} alt={recipe.title} className="recipe-page-image" />
        </div>
    );
}