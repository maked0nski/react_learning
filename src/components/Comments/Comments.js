import React, {useEffect, useState} from 'react';
import Comment from "../Comment/Comment";

const Comments = () => {

    let [comments, setComments] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(value => setComments(value))
    }, [])


    return (
        <div className={'comments'}>
            <h2>Comments</h2>
            {comments.map(value => <Comment key={value.id} data={value}/>)}
        </div>
    );
};

export default Comments;