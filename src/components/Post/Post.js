import React from 'react';

const Post = (props) => {
    const {id, userId, title, body} = props.data
    // console.log(props)
    return (
        <div>
            {id}--{userId}--{title}--{body}
        </div>
    );
};

export default Post;