import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {Car} from "../Car/Car";
import {getAllCars, updateCar} from "../../store";

const Cars = () => {
    const {cars, status, error, upd} = useSelector(state => state['carReducer']);       //відповідає за отримання данних із стору

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCars())
        dispatch(updateCar({upd: 0}))
    }, [upd])

    return (
        <div className={'container'}>
            {status === "pending" && <h1>Data loading...</h1>}
            {error && <h2 className={'error'}>{error}</h2>}
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};