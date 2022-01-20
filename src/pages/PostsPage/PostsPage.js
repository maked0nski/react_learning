import React, {useEffect, useState} from 'react';
import {Outlet} from 'react-router-dom';

import {postService} from "../../services";
import {Post} from "../../conponents";


const PostsPage = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getAll().then(value => setPosts(value))
    }, [])

    return (
        <div>
            <h1>Posts Page</h1>
            {posts && posts.map(post => <Post key={post.id} post={post}/>)}
            <Outlet/>
        </div>
    );
};

export {PostsPage};