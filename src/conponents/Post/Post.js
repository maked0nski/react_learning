import React from 'react';

const Post = ({post}) => {
    const  {id, userId, title, body}=post;
    console.log(post)
    return (
        <div>
            <div>id: {id}, userId: {userId}</div>
            <div>title: {title}</div>
            <div>body: {body}</div>
        </div>
    );
};

export default Post;