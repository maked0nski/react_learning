import React from 'react';

import css from "./notFoundPage.module.css";
import {Link} from "react-router-dom";


const NotFoundPage = () => {
    return (
        <div className={css.errorPage}>
            <div className={css.errorPageText}>
                <h1>404</h1>
                <p>— Не то чтобы совсем не попал,— сказал Пух,— но только не попал в шарик!</p>
                <p><Link to={'/'}>Начать с начала</Link></p>
            </div>
            <div>
                <img src={'http://zanami.ru/assets/templates/zanami/img/404.png'} alt={'404'}/>
            </div>

        </div>
    );
};

export {NotFoundPage};