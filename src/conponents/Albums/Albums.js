import React from 'react';
import {Link} from "react-router-dom";

const Albums = ({album}) => {
    const {id, userId, title} = album;
    return (
        <div>
            <div>{id}) userId - {userId}, title - {title}</div>
            <Link to={id+`/photo`} > <button>Show photo</button> </Link>
        </div>
    );
};

export {Albums};