import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";

import {createCar} from "../../store";

const Form = () => {
    const {handleSubmit, register, reset} = useForm();

    const dispatch = useDispatch();     //відповідає за запис данних в стор

    const submit = (data) => {
        dispatch(createCar({data}))             //через Діспач передаємо обєкт data в Редюс стора addCar в action
        reset()
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <label className={'form-label'}>Model:
                <input
                    className={'form-control'}
                    placeholder={'Enter a model'}
                    type={'text'}
                    {...register('model')}
                />
            </label>
            <label className={'form-label'}>Price:
                <input
                    className={'form-control'}
                    placeholder={'Enter a price'}
                    type={'text'}
                    {...register('price')}
                />
            </label>
            <label className={'form-label'}>Year:
                <input
                    className={'form-control'}
                    placeholder={'Enter a year'}
                    type={'text'}
                    {...register('year')}
                />
            </label>
            <button type="submit" className="btn btn-primary">Save</button>
        </form>
    );
};

export {Form};