export type Recipe = {
  id: number;
  title: string;
  link: string;
  minutes: number;
  tags: string[];
  category: string;
  risingTime?: number;
  coolingTime?: number;
};