import React, {useEffect, useState} from 'react';
import Post from "../Post/Post";


const Posts = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => setPosts(value))
    }, [])

    return (
        <div>
            <h2>Posts</h2>

            {posts.map(value => <Post key={value.id} data={value}/>)}
        </div>
    );
};

export default Posts;