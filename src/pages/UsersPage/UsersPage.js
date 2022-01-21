import React, {useEffect, useState} from 'react';
import {Outlet} from 'react-router-dom';

import css from './userPage.module.css'
import {User} from '../../conponents';
import {userService} from '../../services';

const UsersPage = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(value => setUsers([...value]))
    }, [])


    return (
        <>
            <div className={css.userPage}>
                <h1>Users Page</h1>
                {users && users.map(user => <User key={user.id} user={user}/>)}
            </div>
            <Outlet/>
        </>
    );
};

export {UsersPage};