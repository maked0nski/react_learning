import React, {useEffect, useState} from 'react';

import './cars.css'
import {carService} from "../../servises/car.service";
import Car from "../Car/Car";

const Cars = ({editCar, trigger}) => {

    const [cars, setCars] = useState([]);

    const deleteCar = (id) => {
        carService.deleteById(id).catch(error => console.log(error));
    }

    useEffect(() => {
        carService.getAll().then(value => setCars([...value]))
    }, [trigger]);

    return (
        <div className={'carsBlock'}>
            {cars.map(value => <Car key={value.id} car={value} deleteCar={deleteCar} editCar={editCar}/>)}
        </div>
    );
};

export default Cars;