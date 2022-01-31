import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Outlet} from 'react-router-dom'

import css from './userPage.module.css'
import {User} from "../../components";
import {getAllUsers} from "../../store";

const UsersPage = () => {

    const {users, error, status} = useSelector(state => state['userReducer']);       //відповідає за отримання данних із стору

    const dispatch = useDispatch();

    useEffect(() => {
        if (!users) {
            dispatch(getAllUsers());
        }
    }, [users])

    return (
        <div className={css.userPageContainer}>
            <div className={css.userPage}>
                <h1>List Users</h1>
                {status === "pending" && <h1>Data loading...</h1>}
                {error && <h2 className={'error'}>{error}</h2>}
                {users && users.map(user => <User key={user.id} user={user}/>)}
            </div>
            <Outlet/>
        </div>
    );
};

export {UsersPage};