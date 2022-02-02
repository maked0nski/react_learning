import React from 'react';

import {Dog} from "../Dog/Dog";

const Dogs = ({dogs, dispatch}) => {
    return (
        <div>
            <h1>Dogs</h1>
            {dogs.map(dog => <Dog key={dog.id} dog={dog} dispatch={dispatch}/>)}
        </div>
    );
};

export {Dogs};