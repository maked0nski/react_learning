import React, {useRef} from 'react';

// import css from './'

const Form = ({dispatch}) => {

    const catInput = useRef();
    const dogInput = useRef();

    const form = (e) => {
        e.preventDefault();
        e.target.reset()
    }

    return (
        <div onSubmit={form}>
            <h1>Form</h1>
            <input type={"text"} placeholder={'cat'} ref={catInput}/>
            <button onClick={saveCat}>Save</button>
            <input type={"text"} placeholder={'dog'} ref={dogInput}/>
            <button onClick={saveDog}>Save</button>
        </div>
    );
};

export {Form};