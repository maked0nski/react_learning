import React, {useEffect, useState} from 'react';

import css from './charceter.module.css'
import {episodesService} from "../../service/episodes.service";

const Character = ({value}) => {

    const characterId = value.split('/')[5]

    const [character, setCharacter] = useState({});

    const {name, status, species, gender, origin, location, image} = character;

    useEffect(() => {
        episodesService.getCharacterById(characterId).then(value1 => setCharacter(value1))
    }, [characterId])

    return (
        <div className={css.charceterBlock} >
            <img src={image} alt={name}/>
            <div>{name}</div>
            <div>{status}</div>
            <div>{species}</div>
            <div>{gender}</div>
            <div>{origin?.name}</div>
            <div>{location?.name}</div>
        </div>
    );
};

export {Character};