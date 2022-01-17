import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";

import './form.css'
import {carService} from "../../servises/car.service";

const Form = ({carItem}) => {

    const [car, setCar] = useState({
        model: '',
        price: '',
        year: ''
    });

    const {register, handleSubmit, setValue} = useForm({
        defaultValues: car
    });


    const [response, setResponse] = useState({});

    useEffect(() => {
        if (carItem) {
            setCar(carItem)
            const {model, price, year} = carItem;
            setValue('model', model)
            setValue('price', price)
            setValue('year', year)
        }
    }, [carItem])

    const onSubmit = (something) => {
        if (carItem) {
            carService.updateById(carItem.id, something).then(value => value).catch(error => {
                setResponse(error.response.data)
            })
        } else {
            carService.create(something).then(value => value).catch(error => {
                setResponse(error.response.data)
            })
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2>{carItem ? 'Редагувати машинку' : 'Створити машинку'}</h2>
                <div><label>Model: <input type={"text"} {...register('model')} /></label></div>
                {response?.model && <div className={'errors'}>{response.model[0]}</div>}
                <div><label>Price: <input type={"text"} {...register('price')} /></label></div>
                {response?.price && <div className={'errors'}>{response.price[0]}</div>}
                <div><label>Year: <input type={"text"} {...register('year')} /></label></div>
                {response?.year && <div className={'errors'}>{response.year[0]}</div>}
                <button>{carItem ? 'Edit' : 'Save'}</button>
            </form>
        </div>
    );
};


export default Form;