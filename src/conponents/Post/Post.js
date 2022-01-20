import React from 'react';

import css from './post.module.css'
import {Link} from "react-router-dom";

const Post = ({post, params}) => {

    const {id, title} = post;

    let div=<Link to={id.toString()} state={post}>
        <div>id: {id}, title: {title}</div>
    </Link>

    if(params){
        div = <div>
            <div>id: {id}, title: {title}</div>
        </div>
    }

    return (
        <div className={css.postItem}>
            {div}
        </div>
    );
};

export {Post};