import React from 'react';
import '@styles/Menu.scss';

const Menu = () => {
    return (
    <section className="menu-section">
        <div className="container-close">
            <p className="icon-close">X</p>
        </div>
        <div className="container-categories">
            <ul className="menu-left">
                <li className="item-menu">CATEGORIES</li>
                <li className="item-menu">All</li>
                <li className="item-menu">Clothes</li>
                <li className="item-menu">Electronics</li>
                <li className="item-menu">Furnitures</li>
                <li className="item-menu">Toys</li>
                <li className="item-menu">Others</li>
            </ul>
        </div>
        <div className="container-account">
            <ul className="menu-account">
                <li className="item-account">My orders</li>
                <li className="item-account">My account</li>
            </ul>
            <div className="container-signout">
                <p>dorelly.crisanto@gmail.com</p>
                <a className="signout" href="">Sign out</a>
            </div>
        </div>
        <div className="container-access-login">
                <a className="login" href="">Log in</a>
        </div>
    </section>
    )
}

export default Menu
