import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import css from './userPostPage.module.css'
import {userService} from "../../services";
import {Post} from "../../conponents";

const UserPostPage = () => {

    const params = useParams();

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        userService.getAllPostByUserId(params.id).then(value => {
            setPosts([...value])
        })
    }, [params.id])

    return (
        <div className={css.userPostPage}>
            <h1>User Post Page</h1>
            {posts && posts.map(post => <Post key={post.id} post={post} params={params}/>)}
        </div>
    );
};

export {UserPostPage};