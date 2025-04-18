import React from 'react';
import { Link } from 'react-router-dom';

const style = {
    'backgroundColor': 'lightblue'
}

const Header = () => {
  return (
    <div style={style}>
        <div><Link to='/'>Home</Link></div>
    </div>
  )
}

export default Header