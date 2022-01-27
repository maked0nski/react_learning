import React from 'react';

import css from './header.module.css'
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <>
            <nav className={css.header}>
                <NavLink to={'/'}>The Rick and Morty</NavLink>
            </nav>

        </>
    );
};

export {Header};