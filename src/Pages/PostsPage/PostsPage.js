import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Outlet} from "react-router-dom";


import css from './postsPage.module.css'
import {Post} from "../../components";
import {getAllPosts} from "../../store";

const PostsPage = () => {

    const {posts, status, error} = useSelector(state => state['postReducer']);

    const dispatch = useDispatch();

    useEffect(() => {
        if (!posts) {
            dispatch(getAllPosts());
        }
    }, [posts])


    return (
        <div className={css.postsPageLayout}>
            <div className={css.postsPage}>
                <h1>Posts Page</h1>
                {status === "pending" && <h1>Data loading...</h1>}
                {error && <h2 className={'error'}>{error}</h2>}
                {posts && posts.map(post => <Post key={post.id} post={post}/>)}
            </div>
            <Outlet/>
        </div>
    );
};

export {PostsPage};