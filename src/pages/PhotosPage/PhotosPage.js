import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {albumsService} from "../../services";
import {Photo} from "../../conponents";

const PhotosPage = () => {

    const {albumId} = useParams();

    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        albumsService.getPhotosByAlbumId(albumId).then(value => setPhotos([...value]))
    }, [albumId]);

    return (
        <div>
            <h2>Photos Page</h2>
            {photos && photos.map(value => <Photo key={value.id} photo={value}/>)}
        </div>
    );
};

export {PhotosPage};