import React from 'react';

// import css from './'

const All = ({todo}) => {

    const counter = todo.filter(value => value.status === true).length


    return (
        <div>
            <h1>All: {todo.length} , Completed: {counter}</h1>
        </div>
    );
};

export {All};