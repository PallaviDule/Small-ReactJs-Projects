import React from 'react';
import Board from './Board';
import { componentMainDivStyle } from '../../css-class-constant/component-style';

const TicTacToe = () => {
  return (
    <div className={componentMainDivStyle}>
      <div className='text-3xl font-bold p-2 m-2'> 
        <label className='border-b border-b-blue-800'>Tic Tac Toe </label>
      </div>
      <Board />
    </div>
  )
}

export default TicTacToe;