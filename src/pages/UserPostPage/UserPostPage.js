import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";


import {userService} from "../../services";
import {Post} from "../../conponents";

const UserPostPage = () => {

    const {id} = useParams();

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        userService.getAllPostByUserId(id).then(value => {
            setPosts(value)
        })
    }, [id])

    return (
        <div>
            <h1>UserPostPage</h1>
            {posts && posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export {UserPostPage};