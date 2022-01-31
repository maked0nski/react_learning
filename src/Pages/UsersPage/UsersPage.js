import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Outlet} from 'react-router-dom'

import {getAllUsers} from "../../store";
import {User} from "../../components";
import css from './userPage.module.css'




const UsersPage = () => {

    const {users, error} = useSelector(state => state['userReducer']);       //відповідає за отримання данних із стору


    const dispatch = useDispatch();

    useEffect(() => {
        if(!users.length){
            console.log(users)
            console.log('if')
            dispatch(getAllUsers())
        }

    }, [users])

    return (
        <div className={css.userPageContainer}>
            <div className={css.userPage}>
                <h1>List Users</h1>
                {error && <h2 className={'error'}>{error}</h2>}
                {users && users.map(user => <User key={user.id} user={user}/>)}
            </div>
            <Outlet/>
        </div>
    );
};

export {UsersPage};