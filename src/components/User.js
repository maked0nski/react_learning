import React from 'react';


const User = ({user, getUser}) => {
    const {id, name} = user
    return (
        <div className={'userList'}>
            <div><span>Id</span> - {id} <span>Name</span> - {name}</div>
            <button onClick={() => getUser(user)}>User Details</button>
        </div>
    );
};

export default User;