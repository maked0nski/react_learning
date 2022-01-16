import React, {useState} from 'react';
import {useForm} from "react-hook-form";

import './form.css'
import {carService} from "../../servises/car.service";

const Form = () => {
    const {register, handleSubmit} = useForm();

    const [response, setResponse] = useState({});

    const onSubmit = (something) => {
        carService.create(something).then(value => value).catch(error=>{
            setResponse(error.response.data)
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div><label>Model: <input type={"text"} defaultValue={''} {...register('model')} /></label></div>
                {response?.model && <div className={'errors'}>{response.model[0]}</div>}
                <div><label>Price: <input type={"text"} defaultValue={''} {...register('price')} /></label></div>
                {response?.price && <div className={'errors'}>{response.price[0]}</div>}
                <div><label>Year: <input type={"text"} defaultValue={''} {...register('year')} /></label></div>
                {response?.year && <div className={'errors'}>{response.year[0]}</div>}
                <button>Save</button>
            </form>
        </div>
    );
};


export default Form;