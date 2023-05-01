import React, { useContext } from 'react';
import AppContext from '@context/AppContext';
import '@styles/ProductItem.scss';
import imageProduct from '@imgs/round_shelf.svg';
import buttonAddToCart from '@icons/bt_add_to_cart.svg';

const ProductItem = ({product}) => {
    const { addToCart } = useContext(AppContext); 
    const handleClick = (item) => {
        addToCart(item)
    }

    return (
        <div className="product-item">
            <img src={product.images[0]} alt={product.title} />
            <div className="product-card">
                <div className="product-info">
                    <p>${product.price}</p>
                    <p>{product.title}</p>
                </div>
                <img onClick = {() => handleClick(product)} src={buttonAddToCart} />
            </div>
        </div>
    )
}

export default ProductItem
