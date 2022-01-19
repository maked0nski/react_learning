import React, {useEffect, useState} from 'react';
import {postService} from "../../services/posts.service";
import Post from "../../conponents/Post/Post";
import {useSearchParams} from "react-router-dom";

const PostsPage = () => {

    const [posts, setPosts] = useState([]);

    const [query, setQuery] = useSearchParams();

    useEffect(() => {
        postService.getAll().then(value => {

            const userId = query.get('userId');
            let filter = [...value];
            if (userId) {
                console.log(filter)
                console.log(userId)
                filter = [...value].filter(post => post.userId.includes(userId))
            }
            console.log(filter)
            setPosts(filter)
        })
    }, [query])

    return (
        <div>
            <h1>Posts</h1>
            {posts && posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export default PostsPage;