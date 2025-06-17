import React from 'react'
import { Link } from 'react-router-dom';

// with tailwindcss: "m-1 p-1 border border-gray-400 rounded-[10px] w-[150px] h-[50px] flex items-center justify-center text-center"
const tabStyle = {
  margin: '10px',
  padding: '3px',
  border: '1px solid gray',
  borderRadius: '10px',
  width: '170px',
  height: '50px',
  display: 'flex',
  justifyContent: "center", // horizontally center
  alignItems: "center",      // vertically center
  backgroundColor: '#dbeafe',
  fontWeight: 'bold',
  fontSize: '16px'
}


const Body = () => {
  return (
    <div style={{display:"flex", margin: '10px'}}>
        <div style={tabStyle}><Link to='/ticTacToe'>Tic Tac Toe</Link></div>
        <div style={tabStyle}><Link to='/useMemoDemo'>useMemo Demo</Link></div>
        <div style={tabStyle}><Link to='/useRefDemo'>useRef Demo</Link></div>
        <div style={tabStyle}><Link to='/romanToInteger'>Roman To Integer</Link></div>
        <div style={tabStyle}><Link to='/charCounter'>Character Counter</Link></div>
        <div style={tabStyle}><Link to='/toDoList'>ToDo List</Link></div>
    </div>
  )
}

export default Body;