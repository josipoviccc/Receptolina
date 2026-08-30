import { SweetRecipes } from "./sweetRecipes";
import { SavoryRecipes } from "./savoryRecipes";
import { PastryRecipes } from "./pastryRecipes";
import { SaucesRecipes } from "./saucesRecipes";   
import { DrinkRecipes } from "./drinkRecipes";
import { SeasoningMarinadesRecipes } from "./seasoning-marinades"; 

export const AllRecipes = [
  ...SweetRecipes,
  ...SavoryRecipes,
  ...PastryRecipes,
  ...SaucesRecipes,
  ...DrinkRecipes,
  ...SeasoningMarinadesRecipes,
];

export default AllRecipes;