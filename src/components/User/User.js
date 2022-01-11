import React from 'react';

const User = (props) => {

    const {id, name, username, email} = props.data

    return (
        <div>
            {id}--{name}--{username}--{email}
        </div>
    );
};

export default User;