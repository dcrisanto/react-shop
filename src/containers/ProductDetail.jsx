import React from 'react';
import '@styles/ProductDetail.scss';
import ProductInfo from '@components/ProductInfo';

const ProductDetail = () => {
    return (
        <aside>
            <section className="product-detail-section">
                <div className="container-img">
                    <div className="container-icon-close">
                        <img className="icon-close" src="./assets/icons/icon_close.svg" />
                    </div>
                    <img className="image-product" src="./assets/imgs/fridge.svg" alt="" />
                    <ul className="list-buttons">
                        <li className="item-button"></li>
                        <li className="item-button"></li>
                        <li className="item-button"></li>
                    </ul>
                </div>
                
               <ProductInfo />
            </section>
        </aside>
    )
}

export default ProductDetail
