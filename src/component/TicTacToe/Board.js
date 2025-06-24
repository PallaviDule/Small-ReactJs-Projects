import { useState } from "react";

const winnerCombinations = 
[
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const Square = ({value, onClick}) => {

  return (
    <div 
        className='w-20 h-15 border border-blue-800 items-center content-center font-bold text-2xl hover:bg-blue-300'
        onClick= {onClick}
    >
      {value}
    </div>
  )
}

const Board = () => {
    const [isXNext, setIsXNext] = useState(false);
    const [squares, setSquares] = useState(new Array(9).fill(null));
    const [winner, setWinner] = useState(null);


    const calculateWinner = (newSquare) => {
        for(let winner of winnerCombinations) {
            const [a,b,c] = winner;

            if(newSquare[a] && newSquare[a] === newSquare[b] && newSquare[b] === newSquare[c]) {
                return newSquare[a];
            }
        }

        return newSquare.every(square => square !== null) ? setWinner('DRAW') : null;
    }

    const handleOnClick = (indexClicked) => {
        if(winner || squares[indexClicked])  return;

        let newSquare = squares.slice();
        newSquare[indexClicked] = isXNext ? 'X':'O';
        setSquares(newSquare);

        let result = calculateWinner(newSquare);
        if(result) {
            setWinner(result);
        }

        setIsXNext(!isXNext);
    }

    const handleResetGame = () => {
        setSquares(new Array(9).fill(null));
        setIsXNext(false);
        setWinner(null);
    };

    return (
    <div>
        <div className="my-5">
            { winner ? 
                (winner === 'DRAW' ? <h1>Game is draw.</h1> : <h1>Winner is {winner}</h1>) :
                <label>Next is {isXNext ? 'X' : 'O'} turn</label> 
        }</div>      
        <div className='m-auto grid grid-cols-3 w-60 my-5 border border-blue-800'>
            {squares.map((square, index) => 
                <Square value={square} onClick={() => handleOnClick(index)} key={index}/>
            )}
        </div>
        <div className="text-end mx-10">
            <button 
                className="border rounded-2xl p-2 my-5 bg-radial from-blue-400 to-blue-700 text-white  hover:bg-white"
                onClick={handleResetGame}
            >Reset</button>
        </div>
    </div>
  )
}

export default Board;