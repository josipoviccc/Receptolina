import { Recipe } from "../../types/recipes";
import { category_colors } from "../../constants";

export default function RecipeDetails({ recipe }: { recipe: Recipe }) {
    return (
        <div className="recipe-details">
            <div className="recipe-details-item">
                <div className="recipe-details-header" style={{ borderBottom: "2px solid " + category_colors[recipe.category] }}>
                    <h3>Sastojci</h3>
                </div>
                <ul>
                    {recipe.ingredients.map((ingredient, index) => (
                        <li className="ingredient-row" key={index}>
                            <span>{ingredient.name}</span>
                            <span>{ingredient.quantity}</span> 
                        </li>
                    ))}
                </ul>
            </div>
            <div className="recipe-details-item">
                <div className="recipe-details-header" style={{ borderBottom: "2px solid " + category_colors[recipe.category] }}>
                    <h3>Priprema</h3>
                </div>
                <ol>
                    {recipe.steps.map((step, index) => (
                        <li key={index}>{step}</li>
                    ))}
                </ol>
            </div>
        </div>
    );
}