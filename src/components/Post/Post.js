import React from 'react';
import {Link} from "react-router-dom";

import css from './post.module.css'
import {postItem} from "../../store";
import {useDispatch} from "react-redux";

const Post = ({post}) => {

    const {id, title} = post;

    const dispatch = useDispatch();

    return (
        <div className={css.postItem}>
            {post && <>
                <Link onClick={() =>{dispatch(postItem({post}))}} to={id.toString()}>
                    <div><span>id:</span> {id}, <span>title:</span> {title}</div>
                </Link>
            </>}
        </div>
    );
};

export {Post};