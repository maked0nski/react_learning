import React, {useEffect} from 'react';
import {useParams, Outlet, Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import css from './postPageDetails.module.css'
import {getPostById} from "../../store";

const PostPageDetails = () => {

    const {id} = useParams();

    const dispatch = useDispatch();

    const {post, status, error} = useSelector(state => state['postReducer']);

    useEffect(() => {
        if (!post) {
            dispatch(getPostById({id: id}))
        }
    }, [])

    return (
        <div className={css.postPageDetails}>
            <h1>Post Page Details</h1>
            {status === "pending" && <h1>Data loading...</h1>}
            {error && <h2 className={'error'}>{error}</h2>}

            {post && <>
                <div className={css.details}>
                    <div><span>id:</span> {post.id}, <span>userId:</span> {post.userId}</div>
                    <div><span>title:</span> {post.title}</div>
                    <div><span>body:</span> {post.body}</div>
                    <Link to={'comments'}>
                        <button className={'btn btn-primary'}>Показати коменти до поста</button>
                    </Link>
                </div>
            </>}
            <Outlet/>
        </div>
    );
};

export {PostPageDetails};