import React from 'react';
import {Link} from 'react-router-dom';

import css from './albums.module.css'

const Albums = ({album}) => {
    const {id, userId, title} = album;
    return (
        <div className={css.album}>
            <div>{id}) <span>userId</span> - {userId}, <span>title</span> - {title}</div>
            <Link to={id + `/photo`}>
                <button>Show photo</button>
            </Link>
        </div>
    );
};

export {Albums};