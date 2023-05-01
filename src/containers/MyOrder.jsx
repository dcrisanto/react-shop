import React, {useContext} from 'react';
import AppContext from '@context/AppContext';
import OrderItem from '@components/OrderItem';
import '@styles/MyOrder.scss';
import flecha from '@icons/flecha.svg';
import shopping from '@icons/icon_shopping_cart.svg';

let result = 0;

const MyOrder = () => {
    const { state } = useContext(AppContext);
    const sumTotal = () => {
        const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
        const sum = state.cart.reduce(reducer, 0);
        return sum;
    }
  
    return (
        <aside className="my-order-aside">
             {state.cart.length > 0 ? (
                <section className="my-order-section">
                    <div className="title">
                        <img src={flecha} alt="flecha" />
                        <h1>Shopping cart</h1>
                    </div>
                    {state.cart.map((item) => {
                        return <OrderItem product={item} key={`orderItem-${item.id}`} />
                    })}
                    <div className="total">
                        <p>Total</p>
                        <p>${sumTotal()}</p>
                    </div>
                    <div className="container-btn">
                        <button>Checkout</button>
                    </div>
                </section>
            ) : (
                <section className="no-order-section">
                    <img src={shopping} />
                    <h2>Tu Carro está vacío</h2>
                </section>
            )}
        </aside>
    )
}

export default MyOrder
