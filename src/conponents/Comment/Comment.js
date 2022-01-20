import React from 'react';
import css from './comment.module.css'

const Comment = ({comment: {id, postId, name, email, body}}) => {
    return (
        <div className={css.commentBlock}>
            <div><span>Id:</span> {id}, <span>postId:</span> {postId}</div>
            <div><span>Name:</span> {name}</div>
            <div><span>E-mail:</span> <a href={`mailto:${email}`}>{email}</a></div>
            <div><span>Body:</span> {body}</div>
        </div>
    );
};

export {Comment};