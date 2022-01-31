import React from 'react';
import {Link} from "react-router-dom";

import css from './user.module.css'
import {useDispatch} from "react-redux";
import {usersItem} from "../../store";

const User = ({user}) => {

    const {id, name, username} = user;

    const dispatch = useDispatch();

    return (
        <div className={css.userBlock}>
            <div>{id}) <span>{name}</span>, (username - {username})</div>
            <div><Link to={id.toString()} state={user}>
                <button onClick={() =>{dispatch(usersItem({user}))}}>Details</button>
            </Link></div>
        </div>
    );
};

export {User};