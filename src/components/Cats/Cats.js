import React from 'react';
import {Cat} from "../Cat/Cat";

const Cats = ({cats, word, getId}) => {
    let filtreArr = cats.filter(cat => cat.label === word)
    console.log(filtreArr)
    return (
        <div>
            <h2>{word}</h2>
            {filtreArr.map(pet => <Cat key={pet.id} pet={pet} getId={getId}/>)}
        </div>
    );
};

export {Cats};