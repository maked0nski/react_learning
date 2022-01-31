import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Outlet} from "react-router-dom";

import {getAllComments} from "../../store";
import css from "./commentsPage.module.css";
import {Comments} from "../../components";

const CommentsPage = () => {

    const {comments, status, error} = useSelector(state => state['commentReducer']);

    const dispatch = useDispatch();

    useEffect(() => {
        if(!comments){
            dispatch(getAllComments());
        }
    }, [comments])


    return (
        <div className={css.commentsPageContainer}>
            <div>
                <h1>List Comments</h1>
                <div className={css.commentsPageBlock}>
                {status === "pending" && <h1>Data loading...</h1>}
                {error && <h2 className={'error'}>{error}</h2>}
                {comments && comments.map(comment => <Comments key={comment.id} comment={comment}/>)}
                </div>
            </div>
            <Outlet/>
        </div>
    );
};

export {CommentsPage};