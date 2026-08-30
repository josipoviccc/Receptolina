import { useState } from "react";
import { useParams } from "react-router-dom";
import { categories } from "../data/constants";
import { CategoryCard } from "../components/categoryCard";
import RecipeCard from "../components/recipeCard";
import { Recipe } from "../types/recipes";

type CategoryPageProps = {
  recipes: Recipe[];
};

export default function CategoryPage({ recipes: allRecipes }: CategoryPageProps) {
  const { categoryKey } = useParams<{ categoryKey: string }>();
  const [selectedSub, setSelectedSub] = useState<string | null>(null);

  const recipes = allRecipes.filter((r) => r.category === categoryKey);
  const categoryInfo = categories.find((c) => c.key === categoryKey);

  const subcategoryCounts = recipes.reduce<Record<string, number>>((acc, r) => {
    acc[r.subcategory] = (acc[r.subcategory] ?? 0) + 1;
    return acc;
  }, {});

  const subcategories = Object.keys(subcategoryCounts);
  const color = categoryInfo?.color ?? "#000";

  const filteredRecipes = selectedSub
    ? recipes.filter((r) => r.subcategory === selectedSub)
    : [];

  return (
    <div className="category-page">
      <div
        className="category-page-header"
        style={{ "--category-color": color } as React.CSSProperties}
      >
        <h2>{categoryInfo?.label}</h2>
      </div>

      <div className="category-grid">
        {subcategories.map((sub) => (
        <CategoryCard
            key={sub}
            iconKey={sub}
            label={sub}
            color={color}
            recipeCount={subcategoryCounts[sub]}
            onClick={() => setSelectedSub(sub)}
        />
        ))}
      </div>

      {selectedSub && (
        <div className="recipe-results">
          {filteredRecipes.map((r) => (
            <RecipeCard key={r.id} {...r} />
          ))}
        </div>
      )}
    </div>
  );
}