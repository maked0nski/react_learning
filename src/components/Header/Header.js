import React from 'react';
import {NavLink} from 'react-router-dom';

import css from './header.module.css';

const Header = () => {
    return (
        <nav className={css.header}>
            <NavLink to='/'>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Home
            </NavLink>

            <NavLink to='users'>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Users
            </NavLink>

            <NavLink to='posts'>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Posts
            </NavLink>

            <NavLink to='comments'>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Comments
            </NavLink>

            <NavLink to='Cars'>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Cars
            </NavLink>
        </nav>
    );
};

export {Header};