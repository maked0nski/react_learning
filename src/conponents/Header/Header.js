import React from 'react';
import {NavLink} from "react-router-dom";

import css from "./header.module.css";

const Header = () => {
    return (
        <nav className={css.header}>
            <NavLink to='/' > </NavLink>
            <NavLink to='users'>Users</NavLink>
            <NavLink to='posts'>Posts</NavLink>
        </nav>
    );
};

export {Header};