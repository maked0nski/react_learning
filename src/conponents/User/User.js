import React from 'react';
import {Link} from "react-router-dom";

const User = ({user}) => {
    const {id, name, username} = user;
    return (
        <div>
            <div>{id}) {name}, (username - {username}</div>
            <Link to={id.toString()} state={user}><button>User details</button></Link>
            <Link to={id.toString()+'/albums'} state={user}><button>Album list</button></Link>
        </div>
    );
};

export {User};