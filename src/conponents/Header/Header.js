import React from 'react';
import {NavLink} from "react-router-dom";

import css from "./header.module.css";

const Header = () => {
    return (
        <div className={css.header}>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='users'>Users</NavLink>
            <NavLink to='posts'>Posts</NavLink>
        </div>
    );
};

export default Header;