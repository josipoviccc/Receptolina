import { SweetRecipes } from "./sweetRecipes";
import { SavoryRecipes } from "./savoryRecipes";
import { PastryRecipes } from "./pastryRecipes";
import { SaucesRecipes } from "./saucesRecipes";
import { Recipe } from "../types/recipes";

type categoryConfig = {
    label: string;
    recipes: Recipe[];
};

export const categoriesConfig: Record<string, categoryConfig> = {
    slatko: { label: "Slatko", recipes: SweetRecipes },
    slano: { label: "Slano", recipes: SavoryRecipes },
    pecivo: { label: "Pekarski proizvodi", recipes: PastryRecipes },
    umaci: { label: "Umaci", recipes: SaucesRecipes },
};