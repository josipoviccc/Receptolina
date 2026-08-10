import { SweetRecipes } from "./sweetRecipes";
import { SavoryRecipes } from "./savoryRecipes";
import { PastryRecipes } from "./pastryRecipes";
import { SaucesRecipes } from "./saucesRecipes";   

export const AllRecipes = [
  ...SweetRecipes,
  ...SavoryRecipes,
  ...PastryRecipes,
  ...SaucesRecipes,
];

export default AllRecipes;