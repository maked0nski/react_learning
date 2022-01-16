import React from 'react';


const Post = ({post: {userId, id, title, body}, getPostId}) => {

    return (
        <div className={'postBlockItem'}>
            <div><span>userId</span>  -  {userId}</div>
            <div><span>id</span>  -  {id}</div>
            <div><span>title</span>  -  {title}</div>
            <div><span>body</span>  -  {body}</div>
            <button onClick={() => getPostId(id)}>Show comments</button>
        </div>
    );
};

export default Post;