import React from 'react';
import {useDispatch} from "react-redux";

import {delCar, editCar} from "../../store";

const Car = ({car: {id, model, price, year}}) => {

    const dispatch = useDispatch();
    return (
        <div className={'card'}>
            <div  className={'card-body'}>
                <div className={'card-title'}>Model: {model}</div>
                <div className={'card-text'}>Price: {price}</div>
                <div className={'card-text'}>Year: {year}</div>
                <div className={'card-text'}>id: {id}</div>
            </div>
            <button className={'btn btn-primary'} onClick={() => dispatch(delCar({id:id}))}>Delete</button>
            <button className={'btn btn-primary'} onClick={() => dispatch(editCar({id:id}))}>Edit</button>
        </div>
    );
};

export {Car};