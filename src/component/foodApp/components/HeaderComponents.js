import React, {useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlinestatus';
import {UserContext} from '../utils/UserContext';
import { useSelector } from 'react-redux';

const headerClassName = 'px-4 hover:font-bold';

const Header = () => {
    const [loginButton, setLoginButton] = useState('Login');
    const onlineStatus = useOnlineStatus();
    const {loggedUser} = useContext(UserContext);
    const cartItems = useSelector((store) => store.cart.items);

    return (
        <div className='bg-amber-100 shadow-lg flex justify-between items-center'> 
            <div>
                <img
                    className='w-[100px] h-[80px]' 
                    alt='logo-image' 
                    src={`https://thumbs.dreamstime.com/b/lebensmittellieferungs-logodesign-134749604.jpg`} />
            </div>
            <ul className='flex justify-end h-10 items-center'>
                <li className={headerClassName}>{onlineStatus ? '✅' : '🔴' }</li>
                <li className={headerClassName}><Link to='/foodApp'>Home </Link></li>
                <li className={headerClassName}><Link to='/foodApp/about'>About</Link></li>
                <li className={headerClassName}><Link to='/foodApp/cart'> Cart ({cartItems.length})</Link></li>
                <li className={headerClassName}><Link to='/foodApp/groceries'>Groceries</Link></li>
                <li className={headerClassName}><Link to='/foodApp/user'>User: {loggedUser}</Link></li>
                <button className={headerClassName}
                    onClick = { () => loginButton === 'Login' ? setLoginButton('Logout') : setLoginButton('Login')}>{loginButton}</button>
            </ul>
        </div>
    );
};

export default Header;