export type Recipe = {
  id: number;
  title: string;
  link: string;
  minutes: number;
  tags: string[];
  category: "slano" | "slatko" | "pecivo" | "umaci";
  risingTime?: number;
  coolingTime?: number;
};