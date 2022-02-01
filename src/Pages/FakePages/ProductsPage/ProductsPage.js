import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import css from './ProductsPage.module.css'
import {getAllProducts} from "../../../store";
import {Product} from "../../../components";

const ProductsPage = () => {

    const {products, status, error} = useSelector(state => state['productReducer']);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllProducts());
    }, [])


    return (
        <div>
            <h1>ProductsPage</h1>
            {status === "pending" && <h1>Data loading...</h1>}
            {error && <h2 className={'error'}>{error}</h2>}

            <div className={`${css.productsList}, container`}>
                {products && products.map(product => <Product key={product.id} product={product}/>)}
            </div>
        </div>
    );
};


export {ProductsPage};