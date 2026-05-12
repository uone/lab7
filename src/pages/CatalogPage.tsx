import { useState, useEffect } from "react";
import { recipes } from "../data/recipes";
import RecipeCard from "../components/RecipeCard";

const CatalogPage = () => {
  const [category, setCategory] = useState("всі");
  const [maxTime, setMaxTime] = useState(180);
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);

  useEffect(() => {
    const filtered = recipes.filter(recipe => {
      const matchCategory = category === "всі" || recipe.category === category;
      const matchTime = recipe.time <= maxTime;
      return matchCategory && matchTime;
    });
    setFilteredRecipes(filtered);
  }, [category, maxTime]);

  const categories = ["всі", ...new Set(recipes.map(r => r.category))];

  return (
    <div style={{ padding: "2rem", maxWidth: "1200px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center", color: "#2c3e2f" }}>📖 Каталог рецептів</h1>
      <div style={{ display: "flex", gap: "2rem", justifyContent: "center", marginBottom: "2rem", flexWrap: "wrap" }}>
        <div>
          <label style={{ fontWeight: "bold" }}>Категорія: </label>
          <select value={category} onChange={(e) => setCategory(e.target.value)} style={{ padding: "0.5rem", borderRadius: "8px", marginLeft: "0.5rem" }}>
            {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
          </select>
        </div>
        <div>
          <label style={{ fontWeight: "bold" }}>Макс. час (хв): {maxTime}</label>
          <input type="range" min="5" max="180" value={maxTime} onChange={(e) => setMaxTime(Number(e.target.value))} style={{ marginLeft: "0.5rem" }} />
        </div>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem", justifyContent: "center" }}>
        {filteredRecipes.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} />)}
      </div>
    </div>
  );
};

export default CatalogPage;
