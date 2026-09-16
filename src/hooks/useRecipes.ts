// src/hooks/useRecipes.ts
import { useEffect, useState } from "react";
import supabase from "../supabaseClient";
import { Recipe } from "../types/recipes";

export function useRecipes() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    supabase
      .from("recipes")
      .select("*")
      .then(({ data, error }) => {
        console.log("Supabase data:", data);
        console.log("Supabase error:", error);
        if (error) {
          setError(error.message);
        } else {
          const mapped: Recipe[] = data.map((row) => ({
            id: row.id,
            image: row.image,
            title: row.title,
            link: row.link,
            minutes: row.minutes,
            tags: row.tags,
            ingredientGroups: row.ingredients,
            steps: row.steps,
            category: row.category,
            subcategory: row.subcategory,
            portions: row.portions,
            risingTime: row.rising_time ?? undefined,
            coolingTime: row.cooling_time ?? undefined,
          }));
          setRecipes(mapped);
        }
        setLoading(false);
      });
  }, []);

  return { recipes, loading, error };
}