import { Recipe } from "../../types/recipes";

export default function RecipeDetails({ recipe }: { recipe: Recipe }) {
    return (
        <div className="recipe-details">
            <div className="recipe-ingredients">
                <h3>Sastojci</h3>
                <ul>
                    {recipe.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </ul>
            </div>
            <div className="recipe-steps">
                <h3>Koraci</h3>
                <ol>
                    {recipe.steps.map((step, index) => (
                        <li key={index}>{step}</li>
                    ))}
                </ol>
            </div>
        </div>
    );
}