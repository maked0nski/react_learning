import React from 'react';

import css from './dog.module.css'

const Dog = ({dog: {id, name}, dispatch}) => {
    return (
        <div className={css.nameItem}>
            <div>{name}</div>
            <button id={'dog'} onClick={() => dispatch({type: 'DEL_DOG', payload: {id}})}>Delete</button>
        </div>
    );
};

export {Dog};