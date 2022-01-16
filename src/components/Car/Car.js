import React from 'react';

import './car.css'

const Car = ({car, deleteCar, editCar}) => {

    const {id, model, price, year} = car

    return (
        <div className={'car'}>
            <div className={'carInfo'}>
                <div>id: {id}</div>
                <div>model: {model}</div>
                <div>price: {price}</div>
                <div>year: {year}</div>
            </div>
            <div className={'carButton'}>
                <button onClick={() => deleteCar(id)}>Delete</button>
                <button onClick={() => editCar(car)}>Edit</button>
            </div>
        </div>
    );
};

export default Car;