import React from 'react';

const Comment = (props) => {
    const {id, postId, name, email, body} = props.data
    return (
        <div>
            {id}--{postId}--{name}--{email}--{body}
        </div>
    );
};

export default Comment;