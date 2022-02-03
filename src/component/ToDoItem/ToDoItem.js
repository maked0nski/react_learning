import React from 'react';

import css from './toDoItem.module.css'

const ToDoItem = ({item: {id, task, status}, dispatch}) => {

    const checked = () => {
        return dispatch({type: 'CHECKED_TODO', payload: {id, task, status: !status}})
    }

    const delItem = () => {
        return dispatch({type: 'DEL_TODO', payload: {id}} )
    }

    return (

        <div className={css.itemBlock}>
            <input className={"form-check-input"} type={"checkbox"} value={status} onChange={checked}/>
            <label className="form-check-label" htmlFor="flexCheckDefault">
                Виконав
            </label>
            <div className={status ? css.task1 : css.task}>{task}</div>
            <button className={'btn btn-danger'} onClick={delItem}>Delete</button>

        </div>
    );
};

export {ToDoItem};