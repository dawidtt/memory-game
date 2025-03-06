import { useEffect, useState } from "react";
import "./styles/GameCard.css";

function GameCard({ isShown, isSelected, pokemonId }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchImg = async () => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`
        );
        if (!response.ok) {
          throw new Error(`HTTP error: Status ${response.status}`);
        }
        let postsData = await response.json();
        setData(postsData);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    fetchImg();
  });

  return (
    <button disabled={isShown ? true : ""}>
      {loading && <p className="loading">Loading...</p>}
      {error && <p className="loading">{error}</p>}
      {isShown && data && (
        <img src={data.sprites.front_default} alt={data.species.name}></img>
      )}
      {isSelected && data ? (
        <img src={data.sprites.front_default} alt={data.species.name}></img>
      ) : (
        <img
          src="./src/assets/pokemon-logo-black-transparent.png"
          alt="Pokemon logo"
        ></img>
      )}
    </button>
  );
}

export default GameCard;
