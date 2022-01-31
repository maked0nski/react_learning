import React from 'react';
import {Outlet} from "react-router-dom";

import css from "./layout.module.css"
import {Header} from "../Header/Header";
import {Footer} from "../Footer/Footer";

const Layout = () => {
    return (
        <>
            <Header/>
            <div className={css.mainFrame}>
                <Outlet/>
            </div>
            <Footer/>
        </>
    );
};

export {Layout};