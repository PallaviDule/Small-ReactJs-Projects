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
    <div className='sticky top-0 z-30 bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 shadow-lg border-b-4 border-cyan-400'>
      <div className='h-16 flex items-center justify-between px-6'>
        <Link to='/' className='text-white text-xl font-semibold hover:text-cyan-300 transition-colors duration-300 hover:scale-105 transform'>
          Home
        </Link>
        <div className='text-white text-2xl sm:text-3xl font-bold tracking-wide'>
        React Learnings Playground
        </div>
        <div className='w-16'></div> {/* Spacer for centering */}
      </div>
    </div>
  )
}

export default Header