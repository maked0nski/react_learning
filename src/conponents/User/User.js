import React from 'react';
import {Link} from "react-router-dom";

import css from './user.module.css'

const User = ({user}) => {
    const {id, name, username} = user;
    return (
        <div className={css.userBlock}>
            <div>{id}) {name}, (username - {username}</div>
            <div><Link to={id.toString()} state={user}>
                <button>Details</button>
            </Link></div>
            <div><Link to={id.toString() + '/albums'} state={user}>
                <button>Album</button>
            </Link></div>
        </div>
    );
};

export {User};