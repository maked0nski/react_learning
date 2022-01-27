import React from 'react';
import {Outlet} from 'react-router-dom'

import css from './layout.module.css'
import {Header} from "../Header/Header";

const Layout = () => {
    return (
        <div className={css.layout}>
            <Header/>
            <Outlet/>
        </div>
    );
};

export {Layout};