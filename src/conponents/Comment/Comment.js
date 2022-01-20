import React from 'react';
import css from './comment.module.css'

const Comment = ({comment: {id, postId, name, email, body}}) => {
    return (
        <div className={css.commentBlock}>
            <div>Id: {id}, postId: {postId}</div>
            <div>Name: {name}</div>
            <div>E-mail: <a href={`mailto:${email}`}>{email}</a></div>
            <div>Body: {body}</div>
        </div>
    );
};

export default Comment;