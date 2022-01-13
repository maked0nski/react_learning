import React from 'react';

const Comment = ({comment: {postId, id, name, email, body}}) => {

    return (
        <div>
            <div>{postId}--{id}--{name}--{email}--{body}</div>
        </div>
    );
};

export default Comment;