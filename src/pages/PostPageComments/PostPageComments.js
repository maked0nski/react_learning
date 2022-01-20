import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {postService} from "../../services";
import Comment from "../../conponents/Comment/Comment";

const PostPageComments = () => {

    const {id: postId} = useParams();

    const [comments, setComments] = useState([]);

    useEffect(() => {
        postService.getCommentByIdPost(postId).then(value => setComments(value))

    }, [postId])
    return (
        <div>
            <h1>PostPageComments</h1>
            {comments && comments.map(value => <Comment key={value.id} comment={value}/>)}
        </div>
    );
};

export {PostPageComments};