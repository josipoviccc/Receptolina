import { Link } from "react-router-dom";
import { categories } from "../constants";
import { Recipe } from "../types/recipes";

export default function RecipeCard({ 
    link, 
    title, 
    minutes, 
    tags,
    category
}: Recipe) {
    const categoryColor = categories.find(cat => cat.key === category)?.color; //?.color ako ne postoji category, ne baca error, nego undefined
    return (
        <div className="recipe-card-container">
        <Link to={link} className="recipe-card">
        <div className="accent-bar" style={{ backgroundColor: categoryColor }} /> 
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
