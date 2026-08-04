import RecipeCard from "./recipeCard";
import { category_colors } from "../constants";
import { Recipe } from "../types/recipes";

type CategorySectionProps = {
    label: string;
    categoryKey: "slano" | "slatko" | "pecivo";
    recipes: Recipe[];
};

export default function CategorySection({ label, categoryKey, recipes }: CategorySectionProps) {
    return (
        <div className="category-section">
            <div 
                className="category-header" 
                style={{ borderColor: category_colors[categoryKey] }}
            >
                <h2>{label}</h2>
                <span className="category-count">
                    {recipes.length} {recipes.length === 1 ? "recept" : "recepta"}
                </span>
            </div>
            <div className="recipe-grid">
                {recipes.map((recipe) => (
                    <RecipeCard
                        key={recipe.id}
                        id={recipe.id}
                        link={`/recipes/${recipe.id}`}
                        title={recipe.title}
                        minutes={recipe.minutes}
                        tags={recipe.tags}
                        category={recipe.category}
                        risingTime={recipe.risingTime}
                        coolingTime={recipe.coolingTime}
                    />
                ))}
            </div>
        </div>
    );
}