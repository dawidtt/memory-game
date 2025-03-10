import { useState } from "react";
import "./App.css";
import Gameboard from "./Gameboard";
import WinModal from "./WinModal";

function App() {
  const [isGameOver, setIsGameOver] = useState(false);
  function gameOver() {
    setIsGameOver(true);
  }
  return (
    <>
      <header>
        <h1>Pokemon Memory Game</h1>
      </header>
      <Gameboard gameOver={gameOver} />
      {isGameOver && <WinModal />}
    </>
  );
}

export default App;
