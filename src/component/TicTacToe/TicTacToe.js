import React from 'react';
import Board from './Board';
import { componentMainDivStyle } from '../../css-class-constant/component-style';

const TicTacToe = () => {
  return (
    <div className={componentMainDivStyle}>
      <label className='text-xl font-bold'> Tic Tac Toe</label>
      <Board />
    </div>
  )
}

export default TicTacToe;