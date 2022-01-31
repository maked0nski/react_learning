import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getAllUsers} from "../../store";
import {User} from "../../components";




const UsersPage = () => {

    const {users, error} = useSelector(state => state['userReducer']);       //відповідає за отримання данних із стору


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllUsers())
    }, [])

    return (
        <>
            <h2>UsersPage</h2>
            {error && <h2 className={'error'}>{error}</h2>}
            {users.map(user => <User key={user.id} user={user} />)}

        </>
    );
};

export {UsersPage};