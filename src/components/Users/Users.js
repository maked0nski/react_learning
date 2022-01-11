import React, {useEffect, useState} from 'react';
import User from "../User/User";

const Users = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(promise => promise.json())
            .then(promise => setUsers(promise))
    }, [])


    return (
        <div className={'users'}>
            <h2>Users</h2>

            {users.map(value => <User key={value.id} data={value}/>)}
        </div>
    );
};

export default Users;