import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";

import {createCar, editCar} from "../../store";
import {joiResolver} from "@hookform/resolvers/joi";
import {CarValidator} from "../../validators/car.validator";

const Form = () => {
    const {
        handleSubmit,
        register,
        reset,
        setValue,
        formState: {errors}
    } = useForm({resolver: joiResolver(CarValidator), mode:"onTouched"});

    const {updCar} = useSelector(state => state['carReducer']);

    const dispatch = useDispatch();     //відповідає за запис данних в стор

    const submit = (data) => {
        if (updCar?.id) {
            let car = {...data, id: updCar.id}
            dispatch(editCar({car}))
            reset()

        } else {
            dispatch(createCar({data}))             //через Діспач передаємо обєкт data в Редюс стора addCar в action
            reset()
        }
        // reset()
    }

    setValue('model', updCar ? updCar?.model : updCar?.model)
    setValue('price', updCar ? updCar?.price : updCar?.price)
    setValue('year', updCar ? updCar?.year : updCar?.year)


    return (
        <form onSubmit={handleSubmit(submit)}>
            <div>
                <div className={'inputBlock'}>
                    <label className={'form-label'}>Model : </label>
                    <input
                        className={'form-control'}
                        placeholder={'Enter a model'}
                        type={'text'}
                        {...register('model')}

                    />
                </div>

                {errors.model && <span className={'error'}>{errors.model.message}</span>}
            </div>
            <div>
                <div className={'inputBlock'}>
                    <label className={'form-label'}>Price : </label>
                    <input
                        className={'form-control'}
                        placeholder={'Enter a price'}
                        type={'number'}
                        {...register('price')}
                    />
                </div>

                {errors.price && <span className={'error'}>{errors.price.message}</span>}
            </div>

            <div>
                <div className={'inputBlock'}>
                    <label className={'form-label'}>Year : </label>
                    <input
                        className={'form-control'}
                        placeholder={'Enter a year'}
                        type={'number'}
                        {...register('year')}
                    />
                </div>

                {errors.year && <span className={'error'}>{errors.year.message}</span>}
            </div>

            <button type="submit" className="btn btn-primary">{updCar?.id ? 'Edit' : 'Save'}</button>
        </form>
    );
};

export {Form};