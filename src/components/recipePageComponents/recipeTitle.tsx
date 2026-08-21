import { Recipe } from "../../types/recipes";

type RecipeTitleProps = {
    recipe: Recipe;
};

export default function RecipeTitle({ recipe }: RecipeTitleProps) {
    return (
        <div className="recipe-title">
            <h2 className="recipe-title-text">{recipe.title}</h2>
            <div className="recipe-description">
                {recipe.minutes < 90 && (
                    <div className="recipe-description-item">
                        <div className="recipe-time">{recipe.minutes} min</div>
                        <div className="recipe-time-text">PRIPREMA</div>
                    </div>
                )}
                {recipe.minutes >= 90 && (
                    <div className="recipe-description-item">
                        <div className="recipe-time-text">{(recipe.minutes / 60).toFixed(1)} h</div>
                        <div className="recipe-time-text">PRIPREMA</div>
                    </div>
                )}
                <div className="recipe-description-item">
                    <div className="recipe-time">{recipe.portions}</div>
                    <div className="recipe-time-text">PORCIJE</div>
                </div>
                    {recipe.risingTime && (
                    <div className="recipe-description-item">
                        {recipe.risingTime < 90 && (
                            <div className="recipe-time">{recipe.risingTime} min</div>
                        )}
                        {recipe.risingTime > 90 && (
                            <div className="recipe-time-text">{(recipe.risingTime / 60).toFixed(1)} h</div>
                        )}
                        <div className="recipe-time-text">DIZANJE</div>
                    </div>
                    )}
                    {recipe.coolingTime && (
                    <div className="recipe-description-item">
                        {recipe.coolingTime < 90 && (
                            <div className="recipe-time">{recipe.coolingTime} min</div>
                        )}
                        {recipe.coolingTime > 90 && (
                            <div className="recipe-time-text">{(recipe.coolingTime / 60).toFixed(1)} h</div>
                        )}
                        <div className="recipe-time-text">HLAĐENJE</div>
                </div>
                )}
            </div>
        </div>  
    );
}