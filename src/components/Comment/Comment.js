import React from 'react';

const Comment = (props) => {
    const {id, postId, name, email, body} = props.data
    return (
        <div className={'comment'}>
            <div>Id : {id}</div>
            <div>Post Id : {postId}</div>
            <div>Name : {name}</div>
            <div>Email : {email}</div>
            <div>Body : {body}</div>
        </div>
    );
};

export default Comment;