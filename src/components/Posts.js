import React, {useEffect, useState} from 'react';

import {postService} from "../services/post.services";
import Post from "./Post";

const Posts = ({userId, getPostId}) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getByUserId(userId)
            .then(value => setPosts(value))
    }, [userId]);

    return (
        <div className={'PostsListBlock'}>
            <h2>Posts user</h2>
            <div>{posts.map(value => <Post key={value.id} post={value} getPostId={getPostId}/>)}</div>
        </div>
    );
};

export default Posts;