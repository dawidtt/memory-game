import { useState } from "react";
import "./App.css";
import Gameboard from "./Gameboard";
import WinModal from "./WinModal";

function App() {
  const [isGameOver, setIsGameOver] = useState(false);
  function generatePokemons() {
    function shuffleArray(array) {
      for (let i = array.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
    const pokemonsIds = [];
    const pokemons = [];

    for (let i = 0; i < 8; i++) {
      while (true) {
        const randomNum = Math.ceil(Math.random() * 100);
        if (!pokemonsIds.includes(randomNum)) {
          pokemonsIds.push(randomNum);
          break;
        }
      }
    }
    const pokemonsIdsMultiplied = [...pokemonsIds, ...pokemonsIds];
    for (let i = 0; i < 16; i++) {
      pokemons.push({
        fetchId: pokemonsIdsMultiplied[i],
        id: crypto.randomUUID(),
        isShown: false,
        isSelected: false,
        wasSelected: false,
      });
    }
    shuffleArray(pokemons);
    return pokemons;
  }

  function gameOver() {
    setIsGameOver(true);
  }

  const [pokemons, setPokemons] = useState(generatePokemons());

  return (
    <>
      <header>
        <h1>Pokemon Memory Game</h1>
      </header>
      <Gameboard
        gameOver={gameOver}
        pokemons={pokemons}
        setPokemons={setPokemons}
      />
      {isGameOver && <WinModal />}
    </>
  );
}

export default App;
