import React from 'react';
import {useForm} from "react-hook-form";

// import css from './'

const Form = ({dispatch}) => {
    const {register, handleSubmit, reset} = useForm();

    const submit = (e) => {
        dispatch({type: 'ADD_TODO', payload: e})
        reset()
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input className={'form-control'} {...register('task')} placeholder={'Що запланував?'}/>
            <button className={'btn btn-primary'}>Save</button>
        </form>
    );
};

export {Form};