import React from 'react';

const Post = (props) => {
    const {id, userId, title, body} = props.data
    return (
        <div className={'post'}>
            <div>Id : {id}</div>
            <div>User Id : {userId}</div>
            <div>Title : {title}</div>
            <div>Body : {body}</div>
        </div>
    );
};

export default Post;