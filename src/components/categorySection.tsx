import RecipeCard from "./recipeCard";
import { category_colors } from "../constants";
import { Recipe } from "../types/recipes";

type CategorySectionProps = {
    label: string;
    categoryKey: string;
    recipes: Recipe[];
};

export default function CategorySection({ label, categoryKey, recipes }: CategorySectionProps) {
    return (
        <div className="category-section">
            <div 
                className="category-header" 
                style={{ borderColor: category_colors[categoryKey] }}>
                <h2>{label}</h2>
            </div>
            <div className="recipe-grid">
                {recipes.map((recipe) => (
                    <RecipeCard
                        key={recipe.id}
                        id={recipe.id}
                        link={`/recipePage/${recipe.id}`}
                        title={recipe.title}
                        minutes={recipe.minutes}
                        tags={recipe.tags}
                        category={recipe.category}
                        portions={recipe.portions}
                        risingTime={recipe.risingTime}
                        coolingTime={recipe.coolingTime}
                        steps={recipe.steps}
                        ingredientGroups={recipe.ingredientGroups}
                    />
                ))}
            </div>
        </div>
    );
}