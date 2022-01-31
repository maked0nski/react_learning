import React from 'react';

import css from './user.module.css'
import {Link} from "react-router-dom";

const User = ({user:{id, name, username}}) => {

    return (
        <div className={css.userBlock}>
            <div>{id}) <span>{name}</span>, (username - {username})</div>
            {/*<div><Link to={id.toString()} state={user}>*/}
            {/*    <button>Details</button>*/}
            {/*</Link></div>*/}
            {/*<div><Link to={id.toString() + '/albums'} state={user}>*/}
            {/*    <button>Album</button>*/}
            {/*</Link></div>*/}
        </div>
    );
};

export {User};