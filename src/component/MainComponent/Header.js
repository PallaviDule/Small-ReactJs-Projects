import React from 'react';
import { Link } from 'react-router-dom';

const style = {
    backgroundColor: '#dbeafe',
    height: '30px',
    padding: '2px 5px',
    fontWeight: 'bold'
};

const Header = () => {
  return (
    <div style={style}>
        <div><Link to='/'>Home</Link></div>
    </div>
  )
}

export default Header