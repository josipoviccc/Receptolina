export type Recipe = {
  id: number;
  title: string;
  link: string;
  cover: string;
  minutes: number;
  tags: string[];
  category: "slano" | "slatko" | "pecivo";
  risingTime?: number;
  coolingTime?: number;
};