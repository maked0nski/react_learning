import React from 'react';

const User = (props) => {

    const {id, name, username, email} = props.data

    return (
        <div className={'user'}>
            <div>Id : {id}</div>
            <div>Name : {name}</div>
            <div>Username : {username}</div>
            <div>Email : {email}</div>
        </div>
    );
};

export default User;