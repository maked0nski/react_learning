import React from 'react';
import {Outlet} from "react-router-dom";

import css from './homePage.module.css'

const HomePage = () => {
    return (
        <div className={css.homePage}>
            <Outlet/>
        </div>
    );
};

export {HomePage};