import { Recipe } from "../../types/recipes";

export default function RecipeTitle({ recipe }: { recipe: Recipe }) {
    return (
        <div className="recipe-title">
            <h2 className="recipe-title-text">{recipe.title}</h2>
            <div className="recipe-description">
                <div className="recipe-description-item">
                    <div className="recipe-time">{recipe.minutes} min</div>
                    <div className="recipe-time-text">PRIPREMA</div>
                </div>
                <div className="recipe-description-item">
                    <div className="recipe-time">{recipe.portions}</div>
                    <div className="recipe-time-text">PORCIJE</div>
                </div>
                    {recipe.risingTime && (
                    <div className="recipe-description-item">
                        <div className="recipe-time">{recipe.risingTime} min</div>
                        <div className="recipe-time-text">DIZANJE</div>
                    </div>
                    )}
                    {recipe.coolingTime && (
                <div className="recipe-description-item">
                    <div className="recipe-time">{recipe.coolingTime} min</div>
                    <div className="recipe-time-text">HLAĐENJE</div>
                </div>
                )}
            </div>
        </div>  
    );
}