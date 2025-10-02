import { useState } from "react";

const winnerCombinations = [
  [0, 1, 2],
  [0, 4, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const Square = ({ value, onClick, isWinning }) => (
  <button
    className={`w-20 h-20 flex items-center justify-center border-2 border-blue-600 text-3xl font-extrabold transition-all duration-200 rounded-lg shadow
      ${isWinning ? "bg-blue-400 text-white scale-105 shadow-lg" : "bg-white hover:bg-blue-100"}
      `}
    onClick={onClick}
    disabled={!!value}
    style={{ outline: "none" }}
  >
    {value}
  </button>
);

const Board = () => {
  const [isXNext, setIsXNext] = useState(false);
  const [squares, setSquares] = useState(new Array(9).fill(null));
  const [winner, setWinner] = useState(null);
  const [winningLine, setWinningLine] = useState([]);

  const calculateWinner = (newSquare) => {
    for (let winner of winnerCombinations) {
      const [a, b, c] = winner;
      if (
        newSquare[a] &&
        newSquare[a] === newSquare[b] &&
        newSquare[b] === newSquare[c]
      ) {
        setWinningLine([a, b, c]);
        return newSquare[a];
      }
    }
    if (newSquare.every((square) => square !== null)) {
      return "DRAW";
    }
    return null;
  };

  const handleOnClick = (indexClicked) => {
    if (winner || squares[indexClicked]) return;

    let newSquare = squares.slice();
    newSquare[indexClicked] = isXNext ? "X" : "O";
    setSquares(newSquare);

    let result = calculateWinner(newSquare);
    if (result) {
      setWinner(result);
    }
    setIsXNext(!isXNext);
  };

  const handleResetGame = () => {
    setSquares(new Array(9).fill(null));
    setIsXNext(false);
    setWinner(null);
    setWinningLine([]);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <div className="mb-6">
        {winner ? (
          winner === "DRAW" ? (
            <h1 className="text-2xl font-semibold text-blue-500 animate-pulse">
              Game is a draw!
            </h1>
          ) : (
            <h1 className="text-2xl font-bold text-blue-700 animate-bounce">
              Winner: <span className="text-3xl">{winner}</span>
            </h1>
          )
        ) : (
          <label className="text-xl font-medium text-blue-700">
            Next turn: <span className="font-bold">{isXNext ? "X" : "O"}</span>
          </label>
        )}
      </div>
      <div className="grid grid-cols-3 gap-3 bg-white p-6 rounded-2xl shadow-2xl border-4 border-blue-200">
        {squares.map((square, index) => (
          <Square
            value={square}
            onClick={() => handleOnClick(index)}
            key={index}
            isWinning={winningLine.includes(index)}
          />
        ))}
      </div>
      <button
        className="mt-8 px-8 py-2 rounded-full bg-gradient-to-r from-blue-400 to-blue-700 text-white font-bold shadow-lg hover:from-blue-700 hover:to-blue-400 transition-all duration-200"
        onClick={handleResetGame}
      >
        Reset Game
      </button>
    </div>
  );
};

export default Board;