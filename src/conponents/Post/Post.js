import React from 'react';

import css from './post.module.css'
import {Link} from "react-router-dom";

const Post = ({post}) => {

    const {id, title} = post;

    return (
        <div className={css.postItem}>
            <Link to={id.toString()} state={post}>
                <div>id: {id}, title: {title}</div>
            </Link>
        </div>
    );
};

export {Post};