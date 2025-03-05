import { useState } from "react";

function Gameboard() {
  const [pokemons, setPokemons] = useState([
    { id: 0, isShown: false, isSelected: false },
    { id: 1, isShown: false, isSelected: false },
    { id: 2, isShown: false, isSelected: false },
    { id: 3, isShown: false, isSelected: false },
    { id: 4, isShown: false, isSelected: false },
    { id: 5, isShown: false, isSelected: false },
    { id: 6, isShown: false, isSelected: false },
    { id: 7, isShown: false, isSelected: false },
    { id: 8, isShown: false, isSelected: false },
  ]);
  let selected;
  for (const pokemon of pokemons) {
    if (pokemon.isSelected === true) selected++;
  }
  function onselect(id) {
    if (selected < 2) {
      setPokemons(
        pokemons.map((pokemon) =>
          pokemon.id === id ? { ...pokemon, isSelected: true } : pokemon
        )
      );
    } else if (selected >= 2) {
      const selectedPokemons = pokemons.filter(
        (pokemon) => pokemon.isSelected === true
      );
      if (selectedPokemons[0].id === selectedPokemons[1].id)
        setPokemons(
          pokemons.map((pokemon) =>
            pokemon.id === id
              ? { ...pokemon, isShown: true, isSelected: false }
              : pokemon
          )
        );
    }
  }
  return <div className="gameboard"></div>;
}

export default Gameboard;
