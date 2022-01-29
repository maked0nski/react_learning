import React from 'react';

import {useForm} from "react-hook-form";

const Form = ({getFormData, label}) => {

    const {register, handleSubmit, reset} = useForm();

    const submit = (data) => {

        getFormData({...data, label: label});
        reset();
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <label>Add {label}:
                <input type={'text'} {...register('name')}/>
                <button>Save</button>
            </label>
        </form>
    );
};

export {Form};