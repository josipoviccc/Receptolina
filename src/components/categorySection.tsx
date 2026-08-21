import RecipeCard from "./recipeCard";
import { categories } from "../constants";
import { Recipe } from "../types/recipes";

type CategorySectionProps = {
    categoryKey: string;
    recipes: Recipe[];
};

export default function CategorySection({ categoryKey, recipes }: CategorySectionProps) {
    const category = categories.find(c => c.key === categoryKey);
    return (
        <div className="category-section">
            <div 
                className="category-header" 
                style={{ borderColor: category?.color }}> {/* pronalazi boju iz constants.ts na osnovu categoryKey */}
                <h2>{category?.label}</h2>
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