import React from 'react';

import css from './photo.module.css'

const Photo = ({photo}) => {

    const {id, albumId, title, thumbnailUrl, url} = photo;

    return (
        <div className={css.photoItem}>
            <div><span>id:</span> {id}, <span>albumId:</span> {albumId}</div>
            <div><span>title:</span> {title}</div>
            <a href={url}>
                <img src={thumbnailUrl} alt={title}/>
            </a>
        </div>
    );
};

export {Photo};