import { categoryIcons } from "../types/categoryIcons";

type CategoryCardProps = {
  iconKey: string;
  label: string;
  color: string;
  recipeCount: number;
  onClick: () => void;
};

export function CategoryCard({ iconKey, label, color, recipeCount, onClick }: CategoryCardProps) {
  const iconSrc = categoryIcons[iconKey];

  return (
    <div className="category-card" onClick={onClick}>
      <div className="category-card-bar" style={{ background: color }} />
      <div className="category-card-content">
        {iconSrc && <img src={iconSrc} className="category-card-icon" alt="" />}
        <p className="category-card-name">{label}</p>
        <p className="category-card-count">{recipeCount} recepata</p>
      </div>
    </div>
  );
}