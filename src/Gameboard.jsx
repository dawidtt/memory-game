import GameCard from "./GameCard";
import "./styles/Gameboard.css";

function Gameboard({ gameOver, pokemons, setPokemons, score, setScore }) {
  if (
    pokemons.filter((pokemon) => pokemon.isShown === true).length ===
    pokemons.length
  )
    setTimeout(gameOver, 1000);
  gameOver;

  const selectedPokemons = pokemons.filter(
    (pokemon) => pokemon.isSelected === true
  );
  function clearSelected() {
    setPokemons(pokemons.map((pokemon) => ({ ...pokemon, isSelected: false })));
  }

  let selected = 1;
  for (const pokemon of pokemons) {
    if (pokemon.isSelected === true) selected++;
  }
  if (selectedPokemons.length === 2) {
    if (selectedPokemons[0].fetchId === selectedPokemons[1].fetchId)
      setPokemons(
        pokemons.map((pokemon) =>
          pokemon.fetchId === selectedPokemons[0].fetchId ||
          pokemon.fetchId === selectedPokemons[1].fetchId
            ? { ...pokemon, isShown: true, isSelected: false }
            : pokemon
        )
      );
    else {
      setTimeout(clearSelected, 1400);
    }
  }

  function onSelect(id) {
    if (selected < 3) {
      setPokemons(
        pokemons.map((pokemon) =>
          pokemon.id === id
            ? { ...pokemon, isSelected: true, wasSelected: true }
            : pokemon
        )
      );

      pokemons.map((pokemon) =>
        pokemon.id === id && pokemon.isSelected === false
          ? setScore(score + 1)
          : ""
      );
    }
  }
  return (
    <div className="gameboard">
      <div className="gameboard-grid">
        {pokemons.map((pokemon) => (
          <GameCard
            key={pokemon.id}
            id={pokemon.id}
            isShown={pokemon.isShown}
            isSelected={pokemon.isSelected}
            fetchId={pokemon.fetchId}
            onSelect={onSelect}
            wasSelected={pokemon.wasSelected}
          />
        ))}
      </div>
    </div>
  );
}

export default Gameboard;
