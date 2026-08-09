export type Recipe = {
  id: number;
  image?: string;
  title: string;
  link: string;
  minutes: number;
  tags: string[];
  category: string;
  risingTime?: number;
  coolingTime?: number;
};