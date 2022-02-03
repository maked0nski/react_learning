import React from 'react';

import {ToDoItem} from "../ToDoItem/ToDoItem";

import css from './toDoList.module.css'

const ToDoList = ({todo, dispatch}) => {
    return (
        <div>
            <h1>ToDoList</h1>
            <div className={css.list}>
                {todo.map(item => <ToDoItem key={item.id} item={item} dispatch={dispatch}/>)}
            </div>
        </div>
    );
};

export {ToDoList};