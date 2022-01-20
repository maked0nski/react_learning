import React from 'react';

const Photo = ({photo}) => {

    const {id, albumId, title, thumbnailUrl, url} = photo;

    return (
        <div>
            <div>id: {id}, albumId: {albumId}</div>
            <div>title: {title}</div>
            <a href={url}>
                <img src={thumbnailUrl} alt={title}/>
            </a>
        </div>
    );
};

export {Photo};