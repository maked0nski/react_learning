import React from 'react';

import css from './product.module.css'

const Product = ({product}) => {
    const {id, title, price, description, category, image, rating: {count, rate}} = product;

    return (
        <div className={css.productItem}>
            <div className={css.productImage}>
                <img src={image} alt={title}/>
            </div>
            <div className={css.productList}>
                <h3>{title}</h3>
                <span className={css.price}>{price} грн.</span>
                <a href="" className={css.button}>В корзину</a>
            </div>
        </div>
    );
};

export {Product};

