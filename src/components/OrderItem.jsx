import React, {useContext} from 'react';
import AppContext from '@context/AppContext';
import '@styles/OrderItem.scss';
import imageProduct from '@imgs/round_shelf.svg';

const OrderItem = ({product}) => {
    const { removeFromCart } = useContext(AppContext);

    const handleRemove = (id) => {
        removeFromCart(id)
    }

    return (
        <div className="order-item">
            <div className="product-info">
                <img src={product.images[0]} />
                <p>{product.title}</p>
            </div>
            <div className="product-price">
                <p>$ {product.price}</p>
                <p onClick={() => handleRemove(product.id)}>X</p>
            </div>
        </div>
    )
}

export default OrderItem
