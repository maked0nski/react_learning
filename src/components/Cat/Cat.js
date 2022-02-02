import React from 'react';

import css from './cat.module.css'

const Cat = ({cat: {id, name}, dispatch}) => {
    return (
        <div className={css.nameItem}>

            <div>{name}</div>
            <button onClick={() => dispatch({type: 'DEL_CAT', payload: {id}})}>Delete</button>
        </div>
    );
};

export {Cat};