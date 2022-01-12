import React from 'react';

const User = ({user:{id, name}}) => {
    return (
        <div className={'userList'}>
            <div>{id} - {name}</div>
            <button >More info</button>
        </div>
    );
};

export default User;