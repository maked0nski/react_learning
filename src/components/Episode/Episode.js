import React from 'react';

import css from './episone.module.css'
import {Link} from "react-router-dom";

const Episode = ({value}) => {

    return (
        <div>
            <div className={css.episodeItem}>
                <h3>{value.name}</h3>
                <div>episode: {value.episode}</div>
                <div>air_date: {value.air_date}</div>
                <Link to={value.id.toString()} state={value}>Episode details</Link>
            </div>

        </div>
    );
};

export {Episode};