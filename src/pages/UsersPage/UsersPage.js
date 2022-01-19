import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import {userService} from "../../services/user.service";
import User from "../../conponents/User/User";
import css from './userPage.module.css'

const UsersPage = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(value => setUsers([...value]))
    }, [])


    return (
        <>
            <div className={css.userPage}>
                <h1>UserPage</h1>
                {users && users.map(user => <User key={user.id} user={user}/>)}
            </div>
            <Outlet/>
        </>
    );
};

export default UsersPage;