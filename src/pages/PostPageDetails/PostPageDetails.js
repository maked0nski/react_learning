import React, {useEffect, useState} from 'react';
import {Link, Outlet, useLocation, useParams} from 'react-router-dom';

import css from './postPageDetails.module.css'
import {postService} from "../../services";

const PostPageDetails = () => {

    const {id} = useParams();

    const [post, setPost] = useState([]);

    const {state} = useLocation();

    useEffect(() => {
        if(state){
            setPost(state);
            return
        }
        postService.getById(id).then(value => setPost({...value}))

    }, [id])

    return (
        <div className={css.postPageDetails}>
        {/*<div className={'postPageDetails'}>*/}
            <h1>Post Page Details</h1>
            <div className={css.details}>
                <div><span>id:</span> {post.id}, <span>userId:</span> {post.userId}</div>
                <div><span>title:</span> {post.title}</div>
                <div><span>body:</span> {post.body}</div>
                <Link to={'comments'}><button>Показати коменти до поста</button></Link>
            </div>
            <Outlet/>
        </div>
    );
};

export {PostPageDetails};