import React, {useEffect, useState} from 'react';
import {userService} from "../services/user.services";
import User from "./User";

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll()
            .then(value => setUsers(value))
    }, [])

    return (
        <div className={'userListBlosk'}>
            {users.map(value => <User key={value.id} user={value} />)}
        </div>
    );
};

export default Users;