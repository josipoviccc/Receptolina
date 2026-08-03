import { Link } from "react-router-dom";
import { category_colors } from "../constants";
import { Recipe } from "../types/recipes";

export default function RecipeCard({ 
    link, 
    cover, 
    title, 
    minutes, 
    tags,
    category
}: Recipe) {
    return (//dodat za rising i cooling time, ali ne prikazuje se u cardu, samo u receptu
        <div className="recipe-card-container">
        <Link to={link} className="recipe-card">
        <div className="accent-bar" style={{ backgroundColor: category_colors[category] }} />
            <img src={cover} alt={title} className="recipe-card-cover" />
            <h4 className="recipe-card-title">{title}</h4>
            <p className="recipe-card-time">{minutes} min</p>
            <div className="recipe-card-tags">
                {tags.map((tag) => (
                    <span key={tag} className="recipe-card-tag">
                        {tag}
                    </span>
                ))}
            </div>
        </Link>
        </div>
    );
}
