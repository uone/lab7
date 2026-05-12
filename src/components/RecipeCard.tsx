import { Link } from "react-router-dom";
import type { Recipe } from "../types";

interface Props {
  recipe: Recipe;
}

const RecipeCard: React.FC<Props> = ({ recipe }) => {
  return (
    <div style={{ 
      border: "1px solid #e0e0e0", 
      borderRadius: "16px", 
      overflow: "hidden", 
      width: "280px", 
      backgroundColor: "white",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      transition: "transform 0.2s"
    }}>
      <img src={recipe.image} alt={recipe.title} style={{ width: "100%", height: "180px", objectFit: "cover" }} />
      <div style={{ padding: "1rem" }}>
        <h3 style={{ margin: "0 0 8px 0" }}>{recipe.title}</h3>
        <p style={{ margin: "4px 0", color: "#e67e22", fontWeight: "bold" }}>⏱ {recipe.time} хв | 🍽 {recipe.servings} порції</p>
        <p style={{ margin: "4px 0", color: "#555" }}>📂 {recipe.category}</p>
        <Link to={`/recipe/${recipe.id}`} style={{ display: "inline-block", marginTop: "12px", background: "#e67e22", color: "white", padding: "8px 16px", borderRadius: "40px", textDecoration: "none", fontSize: "0.9rem" }}>
          Детальніше →
        </Link>
      </div>
    </div>
  );
};

export default RecipeCard;
