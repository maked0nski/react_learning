import React from 'react';

import css from './comments.module.css'

const Comments = ({comment}) => {

    const {id, name, email, body} = comment;

    return (
        <div className={`${css.commentItem} , card`}>
            {comment && <>
                <div className="card-header">
                    Comment {id}
                </div>
                <div className={'card-body'}>
                    <h5 className={'card-title'}>name: {name}</h5>
                    <h6 className={'card-title'}>email: {email}</h6>
                    <p className={'card-text'}><span>body:</span> {body}</p>
                </div>
            </>}
        </div>
    );
};

export {Comments};