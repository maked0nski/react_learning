import React, {useEffect, useState} from 'react';

import {commentsService} from "../services/comments.services";
import Comment from "./Comment";

const Comments = ({postId}) => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        commentsService.getByPostId(postId)
            .then(value => setComments(value))
    }, [postId])

    return (
        <div className={'CommentsList'}>
            {comments && <h2>Comments</h2>}
            {comments && comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export default Comments;