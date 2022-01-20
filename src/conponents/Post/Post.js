import React from 'react';

import css from './post.module.css'
import {Link} from "react-router-dom";

const Post = ({post, params}) => {

    const {id, title} = post;

    let div=<Link to={id.toString()} state={post}>
        <div><span>id:</span> {id}, <span>title:</span> {title}</div>
    </Link>

    if(params){
        div = <div>
            <div><span>id:</span> {id}, <span>title:</span> {title}</div>
        </div>
    }

    return (
        <div className={css.postItem}>
            {div}
        </div>
    );
};

export {Post};