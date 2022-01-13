import React from 'react';

const User = ({user:{id, name}, getUserDetails}) => {
    return (
        <div className={'userList'}>
            <div>{id} - {name}</div>
            <button onClick={() => getUserDetails(id)} >More info</button>
        </div>
    );
};

export default User;