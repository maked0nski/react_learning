import React from 'react';

import {Item} from "../Item/Item";

const Items = ({cats, word, getId}) => {

    let filtreArr = cats.filter(cat => cat.label === word)

    return (
        <div>
            <h2 style={{textTransform: 'uppercase'}}>{word} list:</h2>
            {filtreArr.map(pet => <Item key={pet.id} pet={pet} getId={getId}/>)}
        </div>
    );
};

export {Items};