import React, {useEffect, useState} from 'react';
import {useParams, Outlet} from "react-router-dom";

import {userService} from "../../services";
import {Albums} from "../../conponents";

const AlbumsPage = () => {

    const params = useParams();

    const {id} = params;
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        userService.getAllAlbumByUserId(id).then(value => setAlbums([...value]))
    }, [id])

    return (
        <div>
            <h2>User albums</h2>
            {albums && albums.map(value => <Albums key={value.id} album={value} />)}
            <Outlet/>
        </div>
    );
};

export {AlbumsPage};