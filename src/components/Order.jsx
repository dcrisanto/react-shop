import React from 'react';
import '@styles/Order.scss';

const Order = () => {
    return (
        <div className="order">
                <div className="products-info">
                    <p>04.25.2021</p>
                    <p>6 articles</p>
                </div>
                <div className="products-price">
                    <p>$ 120,00</p>
                    <p>></p>
                </div>
        </div>
    )
}

export default Order
