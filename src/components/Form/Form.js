import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import './form.css'
import {carService} from "../../servises/car.service";
import {CarValidator} from "../../validator/car.validator";

const Form = ({editCar, update}) => {


    const {register, handleSubmit, formState: {errors}, setValue} = useForm({
        resolver: joiResolver(CarValidator),
        mode: "onTouched",
        defaultValues: {model: '', price: '', year: ''}
    });

    useEffect(() => {
        if(editCar){
            const {model, price, year} = editCar;
            setValue('model', model);
            setValue('price', price);
            setValue('year', year);
        }
    }, [editCar])


    const onSubmit = (something) => {

        if (editCar) {
            const car = carService.updateById(editCar.id, something);
            update(car);
        } else {
            const newCar = carService.create(something);
            update(newCar);
        }
    }


    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2>{editCar ? 'Редагувати машинку' : 'Створити машинку'}</h2>
                <div><label>Model: <input type={"text"} {...register('model')} /></label></div>
                {errors.model && <div className={'errors'}>{errors.model.message}</div>}

                <div><label>Price: <input type={"text"} {...register('price')} /></label></div>
                {errors.price && <div className={'errors'}>{errors.price.message}</div>}

                <div><label>Year: <input type={"text"} {...register('year')} /></label></div>
                {errors.year && <div className={'errors'}>{errors.year.message}</div>}
                <button>{editCar ? 'Edit' : 'Save'}</button>
            </form>
        </div>
    );
};


export default Form;