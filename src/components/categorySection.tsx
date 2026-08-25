import RecipeCard from "./recipeCard";
import { categories } from "../data/constants";
import { Recipe } from "../types/recipes";

type CategorySectionProps = {
    categoryKey: string;
    recipes: Recipe[];
};

export default function CategorySection({ categoryKey, recipes }: CategorySectionProps) {
    const category = categories.find(cat => cat.key === categoryKey);
    return (
        <div className="category-section">
            <div 
                className="category-header" 
                style={{ borderColor: category?.color ?? '#9b9797' }}> 
                <h2>{category?.label ?? 'Nepoznata kategorija'}</h2>
            </div>
            <div className="recipe-grid">
                {recipes.map((recipe) => (
                    <RecipeCard
                        key={recipe.id}
                        id={recipe.id}
                        image={recipe.image}
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