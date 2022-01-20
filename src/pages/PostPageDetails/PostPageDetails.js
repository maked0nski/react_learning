import React, {useEffect, useState} from 'react';
import {Link, Outlet, useLocation, useParams} from 'react-router-dom';

import css from './postPageDetails.css'
import {postService} from "../../services";

const PostPageDetails = () => {

    const {id} = useParams();

    const [post, setPost] = useState([]);

    const {state} = useLocation();

    useEffect(() => {
        if(state){
            setPost({...state});
            return
        }
        postService.getById(id).then(value => setPost(value))

    }, [id])

    return (
        <div className={css.postPageDetails}>
            <h1>Post Page Details</h1>
            {post && <div>
                <div>id: {post.id}, userId: {post.userId}</div>
                <div>title: {post.title}</div>
                <div>body: {post.body}</div>
                <Link to={'comments'}><button>Показати коменти до поста</button></Link>
            </div>}
            <Outlet/>
        </div>
    );
};

export {PostPageDetails};