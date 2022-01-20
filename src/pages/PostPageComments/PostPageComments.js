import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {postService} from "../../services";
import css from './postPageComments.module.css'
import {Comment} from "../../conponents";

const PostPageComments = () => {

    const {id: postId} = useParams();

    const [comments, setComments] = useState([]);

    useEffect(() => {
        postService.getCommentByIdPost(postId).then(value => setComments(value))

    }, [postId])
    return (
        <div className={css.postPageComments}>
            <h1>Post Page Comments</h1>
            {comments && comments.map(value => <Comment key={value.id} comment={value}/>)}
        </div>
    );
};

export {PostPageComments};