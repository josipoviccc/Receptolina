import { category_colors } from "../../constants";

type CategorySectionProps = {
  label: string;
  categoryKey: "slano" | "slatko" | "pecivo" | "umaci";
};

export default function TitleSection({ label, categoryKey }: CategorySectionProps) {
  return (
    <div
      className="category-header"
      style={{ borderColor: category_colors[categoryKey] }}
    >
      <h2>{label}</h2>
  </div>
);
}
