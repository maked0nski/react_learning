import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";

import {createCar, editCar} from "../../store";

const Form = () => {
    const {handleSubmit, register, reset, setValue} = useForm();

    const {updCar} = useSelector(state => state['carReducer']);

    const dispatch = useDispatch();     //відповідає за запис данних в стор

    const submit = (data) => {
        if(updCar?.id){
            let car = {...data, id: updCar.id}
            dispatch(editCar({car}))
            reset()

        } else {
            dispatch(createCar({data}))             //через Діспач передаємо обєкт data в Редюс стора addCar в action
            reset()
        }
        // reset()
    }

    setValue('model', updCar ? updCar?.model: updCar?.model)
    setValue('price', updCar ? updCar?.price: updCar?.price)
    setValue('year', updCar ? updCar?.year: updCar?.year)

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
                    type={'number'}
                    {...register('price')}
                />
            </label>
            <label className={'form-label'}>Year:
                <input
                    className={'form-control'}
                    placeholder={'Enter a year'}
                    type={'number'}
                    {...register('year')}
                />
            </label>
            <button type="submit" className="btn btn-primary">{updCar?.id ? 'Edit' : 'Save'}</button>
        </form>
    );
};

export {Form};