import React from 'react';

const Car = ({car, deleteCar, editCar}) => {
    const {id, model, price, year} = car

    return (
        <div>
            <div>id: {id}</div>
            <div>model: {model}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={() => deleteCar(id)}>Delete</button>
            <button onClick={() => editCar(id)}>Edit</button>
        </div>
    );
};

export default Car;