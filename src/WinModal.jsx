import "./styles/WinModal.css";
function WinModal({ playAgain, score, bestScore }) {
  return (
    <div className="win-modal-wrapper">
      <div className="win-modal">
        <h2>You have won the game</h2>
        <p>Your score was: {score}</p>
        <p>
          {score > bestScore
            ? "It's your best score so far. Good job!!!"
            : "Your best score is higher than that. You can still do better!"}
        </p>
        <button onClick={playAgain}>Play Again</button>
      </div>
    </div>
  );
}

export default WinModal;
