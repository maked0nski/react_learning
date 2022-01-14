import React from 'react';

const Comment = ({comment: {postId, id, name, email, body}}) => {

    return (
        <div className={'commentBlockItem'}>
            <div><span>postId</span> - {postId}</div>
            <div><span>id</span> - {id}</div>
            <div><span>name</span> - {name}</div>
            <div><span>email</span> - {email}</div>
            <div><span>body</span> - {body}</div>
        </div>
    );
};

export default Comment;