export type Recipe = {
  id: number;
  image?: string;
  title: string;
  link: string;
  minutes: number;
  tags: string[];
  ingredients: string[];
  steps: string[];
  category: string;
  portions: number;
  risingTime?: number;
  coolingTime?: number;
};