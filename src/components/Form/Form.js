import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";

import {addCar} from "../../store";

const Form = () => {
    const {handleSubmit, register, reset} = useForm();

    const dispatch = useDispatch();     //відповідає за запис данних в стор

    const submit = (data) => {
        dispatch(addCar({data}))             //через Діспач передаємо обєкт data в Редюс стора addCar в action
        reset()
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
           <label>Model: <input type={'text'} {...register('model')}/></label>
           <label>Price: <input type={'text'} {...register('price')}/></label>
           <label>Year: <input type={'text'} {...register('year')}/></label>
            <button>Save</button>
        </form>
    );
};

export {Form};