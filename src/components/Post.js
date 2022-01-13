import React from 'react';

const Post = ({post: {userId, id, title, body}, getPostId}) => {

    return (
        <div>
            <div>{userId}--{id}--{title}--{body}</div>
            <button onClick={() => getPostId(id)}>Show comments</button>
        </div>
    );
};

export default Post;