import React, {useEffect, useState} from 'react';

import {userService} from "../services/user.services";
import User from "./User";

const Users = ({getUser}) => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll()
            .then(value => setUsers(value))
    }, [])


    return (
        <div className={'userListBlock'}>
            <h2>Users list</h2>
            {users.map(value => <User key={value.id} user={value} getUser={getUser}/>)}
        </div>
    );
};

export default Users;