import { useParams, useNavigate } from "react-router-dom";
import { recipes } from "../data/recipes";

const DetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const recipe = recipes.find(r => r.id === Number(id));

  if (!recipe) {
    return (
      <div style={{ textAlign: "center", padding: "2rem" }}>
        <h2>❌ Рецепт не знайдено</h2>
        <button onClick={() => navigate("/catalog")} style={{ background: "#e67e22", color: "white", border: "none", padding: "0.5rem 1rem", borderRadius: "8px", cursor: "pointer" }}>
          ← Назад до каталогу
        </button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem" }}>
      <button onClick={() => navigate(-1)} style={{ background: "none", border: "none", fontSize: "1rem", cursor: "pointer", marginBottom: "1rem", color: "#e67e22" }}>
        ← Назад
      </button>
      <img src={recipe.image} alt={recipe.title} style={{ width: "100%", borderRadius: "16px", marginBottom: "1rem" }} />
      <h1 style={{ color: "#2c3e2f" }}>{recipe.title}</h1>
      <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem", color: "#e67e22", fontWeight: "bold" }}>
        <span>⏱ {recipe.time} хв</span>
        <span>🍽 {recipe.servings} порції</span>
        <span>📂 {recipe.category}</span>
      </div>
      <h3>🛒 Інгредієнти:</h3>
      <ul style={{ marginBottom: "1.5rem" }}>
        {recipe.ingredients.map((ing, idx) => <li key={idx}>{ing}</li>)}
      </ul>
      <h3>📝 Опис:</h3>
      <p style={{ lineHeight: 1.6 }}>{recipe.description}</p>
    </div>
  );
};

export default DetailPage;
