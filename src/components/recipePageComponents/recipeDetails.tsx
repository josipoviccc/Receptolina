import { Recipe } from "../../types/recipes";
import { categories } from "../../constants";

type RecipeDetailsProps = {
    recipe: Recipe;
}

export default function RecipeDetails({ recipe }: RecipeDetailsProps) {
    const categoryColor = categories.find(cat => cat.key === recipe.category)?.color; 
    return (
        <div className="recipe-details">
            <div className="recipe-details-item">
                <div className="recipe-details-header" style={{ borderBottom: "2px solid " + categoryColor }}>
                    <h3>Sastojci</h3>
                </div>
                <ul className="ingredients-groups">
                    {recipe.ingredientGroups.map((group, i) => (
                        <li className="ingredient-group" key={i}>
                            {group.groupName && <h4>{group.groupName}</h4>}
                            <ul>
                                {group.items.map((ingredient, j) => (
                                    <li className="ingredient-row" key={j}>
                                        <span>{ingredient.name}</span>
                                        <span>{ingredient.quantity}</span>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="recipe-details-item">
                <div className="recipe-details-header" style={{ borderBottom: "2px solid " + categoryColor }}>
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