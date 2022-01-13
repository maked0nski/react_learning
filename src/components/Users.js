import React, {useEffect, useState} from 'react';

import {userService} from "../services/user.services";
import User from "./User";

const Users = ({getUserDetails}) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll()
            .then(value => setUsers(value))
    }, [])


    return (
        <div className={'userListBlock'}>
            <h2>Users list</h2>
            {users.map(value => <User key={value.id} user={value} getUserDetails={getUserDetails}/>)}
        </div>
    );
};

export default Users;