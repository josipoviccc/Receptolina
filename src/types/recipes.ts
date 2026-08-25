export type Ingredient = {
  name: string;
  quantity: string;
};

export type IngredientGroup = {
  groupName?: string;
  items: Ingredient[];
};

export type Recipe = {
  id: number;
  image: string;
  title: string;
  link: string;
  minutes: number;
  tags: string[];
  ingredientGroups: IngredientGroup[];
  steps: string[];
  category: string;
  portions: number;
  risingTime?: number;
  coolingTime?: number;
};