import { useEffect, useState } from "react";

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
    <button>
      {loading && <p className="loading">Loading...</p>}
      {error && <p className="loading">{error}</p>}
      {data && (
        <img src={data.sprites.front_default} alt={data.species.name}></img>
      )}
    </button>
  );
}

export default GameCard;
