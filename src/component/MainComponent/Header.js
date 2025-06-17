import React from 'react';
import { Link } from 'react-router-dom';

const style = {
   // backgroundColor: '#dbeafe',
    height: '50px',
    padding: '2px 5px',
    fontWeight: 'bold',
    display: 'flex',
    justifyContent: 'space-between',
};

const headerClass = {
  fontWeight: 'bold'
}

const Header = () => {
  return (
    <div style={style} className='border-b-5 border-b-cyan-300 bg-blue-950 shadow-2xl items-center'>
        <div className='text-white mx-3 text-xl'><Link to='/'>Home</Link></div>
        <div style={headerClass} className='text-white mx-3 text-3xl'>React.js Projects</div>
    </div>
  )
}

export default Header