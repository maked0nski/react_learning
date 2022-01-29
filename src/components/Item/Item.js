import React from 'react';

const Item = ({pet: {id, name}, getId}) => {

    return (
        <div className={'item'}>
            <div>{name}</div>
            <button onClick={() => getId(id)}>Delete</button>
        </div>
    );
};

export {Item};