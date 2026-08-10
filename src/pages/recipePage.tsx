import RecipePageHeader from "../components/recipePageComponents/recipeHeader";
import { useNavigate, useParams } from "react-router-dom";
import { Recipe } from "../types/recipes";
import RecipeTitle from "../components/recipePageComponents/recipeTitle";
import RecipeDetails from "../components/recipePageComponents/recipeDetails";

export default function RecipePage({ recipes }: { recipes: Recipe[] }) {
    const {id} = useParams<{id: string}>();
    const navigate = useNavigate();
    const recipe = recipes.find((r) => r.id === Number(id));

    if (!recipe) {
        return (
            <div>
                <h2>Recept nije pronađen!</h2>
                <button onClick={() => navigate('/')}>Natrag</button>
            </div>
        );
    }

    return (
        <div className="recipe-page">
            <RecipePageHeader recipe={recipe} />    
            <RecipeTitle recipe={recipe} />
            <RecipeDetails recipe={recipe} />
        </div>
    );
}