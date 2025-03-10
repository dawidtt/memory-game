import "./styles/WinModal.css";
function WinModal({ playAgain }) {
  return (
    <div className="win-modal-wrapper">
      <div className="win-modal">
        <h2>You have won the game</h2>
        <button onClick={playAgain}>Play Again</button>
      </div>
    </div>
  );
}

export default WinModal;
