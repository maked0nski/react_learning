import React from 'react';

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import css from './Layout.module.css'
import HomePage from "../../pages/HomePage/HomePage";

const Layout = () => {
    return (
        <>
            <Header/>
            <div className={css.mainFrame}>
                <HomePage/>
            </div>
            <Footer/>
        </>
    );
};

export default Layout;