import React from 'react';
import Board from './Board';


const TicTacToe = () => {
  return (
    <div className='m-auto my-4 w-5/12 border border-blue-200 bg-blue-100 text-center'>
      <label> Tic Tac Toe</label>
      <Board />
    </div>
  )
}

export default TicTacToe;