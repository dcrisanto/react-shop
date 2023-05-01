import React, { useState, useContext } from 'react';
import AppContext from '@context/AppContext';
import '@styles/Headers.scss';
import Logo from '@components/Logo';
import Navbar from './Navbar';
import Menu from './Menu';
import MyOrder from '@containers/MyOrder';
import iconMenu from '@icons/icon_menu.svg';
import iconShopping from '@icons/icon_shopping_cart.svg';

const Headers = () => {
    const [toggle, setToggle] = useState(false);
    const [toggleOrders, setToggleOrders] = useState(false)
    const { state } = useContext(AppContext);

    const loggedIn = true;

    const handleToggle = () => {
        setToggle(!toggle);
    }

    return (
        <header>
            <nav>
                <img onClick={handleToggle} className="icon-menu" src={iconMenu} />
                <div className="nav-left-secction">
                    <Logo />
                    <Navbar />
                </div>
                <div className="nav-right-secction">
                    <ul className="nav-account-card">
                        {!loggedIn && <li className="item-sign-in"> Sign in</li>}
                        {loggedIn && <li className="item-email" onClick={handleToggle}>dorelly.crisanto@gmail.com</li>}
                        <li className="item-cart" onClick={() => setToggleOrders(!toggleOrders)}>
                            <img className="icon-shopping-notification" src={iconShopping} />
                            {state.cart.length > 0 ? <div>{state.cart.length}</div> :null}
                        </li>
                    </ul>
                </div>
                
            </nav>
            {toggle && <Menu />}
            {toggleOrders && <MyOrder />}
        </header>
    )
}

export default Headers
