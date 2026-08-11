export type Ingredient = {
  name: string;
  quantity: string;
};

export type Recipe = {
  id: number;
  image?: string;
  title: string;
  link: string;
  minutes: number;
  tags: string[];
  ingredients: Ingredient[];
  steps: string[];
  category: string;
  portions: number;
  risingTime?: number;
  coolingTime?: number;
};