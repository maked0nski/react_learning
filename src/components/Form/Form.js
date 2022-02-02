import React, {useRef} from 'react';

// import css from './'

const Form = ({dispatch}) => {

    const catInput = useRef();
    const dogInput = useRef();

    const form = (e) => {
        e.preventDefault();
        e.target.reset()
    }

    const saveCat = () => {
        dispatch({type: 'ADD_CAT', payload: {cat: catInput.current.value}})
    }

    const saveDog = () => {
        dispatch({type: 'ADD_DOG', payload: {dog: dogInput.current.value}})
    }


    return (
        <form onSubmit={form}>
            <h1>Form</h1>
            <input type={"text"} placeholder={'cat'} ref={catInput}/>
            <button onClick={saveCat}>Save</button>
            <input type={"text"} placeholder={'dog'} ref={dogInput}/>
            <button onClick={saveDog}>Save</button>
        </form>
    );
};

export {Form};