import React from 'react';
import '@styles/ProductInfo.scss';
import iconButtonShopping from '@icons/icon_btn_shopping.svg';

const ProductInfo = () => {
    return (
        <div>
            <div className="info-product">
                <p className="price">$120,00</p>
                <h1 className="name-product">Retro refrigerator</h1>
                <p className="description-product">With its functional and practical interior, this refrigerator also fulfills a decorative function, adding personality and a retro-vintage aesthetic to your kitchen or workplace.</p>
            </div>
            <div className="container-btn">
                <button className="btn-to-cart">
                    <img src={iconButtonShopping} alt="icon-shopping-cart" />
                    Add to cart
                </button>
            </div>
        </div>
    )
}

export default ProductInfo
