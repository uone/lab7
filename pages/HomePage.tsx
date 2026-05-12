import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>🍽 Ласкаво просимо до кулінарного блогу!</h1>
      <p>Найсмачніші рецепти української та світової кухні</p>
      <Link to="/catalog" style={{ display: "inline-block", marginTop: "1rem", background: "#e67e22", color: "white", padding: "0.5rem 1rem", borderRadius: "8px", textDecoration: "none" }}>
        Перейти до рецептів →
      </Link>
    </div>
  );
};

export default HomePage;
