import React, {useState} from 'react';
import {useForm} from "react-hook-form";

import './editForm.css'
import {carService} from "../../servises/car.service";

const EditForm = ({carItem}) => {

    const {register, handleSubmit} = useForm();
    const [response, setResponse] = useState({});

    const onSubmit = (car) => {
        carService.updateById(carItem.id, car).then(value => value).catch(error=>{
            setResponse(error.response.data)
        })

    }
    const {model, price, year} = carItem;


    return (
        <div className={'editForm'}>
            <h2>Edit form</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div><label>Model: <input type={"text"} defaultValue={model} {...register('model')} /></label></div>
                {response?.model && <div className={'errors'}>{response.model[0]}</div>}
                <div><label>Price: <input type={"text"} defaultValue={price} {...register('price')} /></label></div>
                {response?.price && <div className={'errors'}>{response.price[0]}</div>}
                <div><label>Year: <input type={"text"} defaultValue={year} {...register('year')} /></label></div>
                {response?.year && <div className={'errors'}>{response.year[0]}</div>}
                <button>Save</button>
            </form>
        </div>
    );
};

export default EditForm;