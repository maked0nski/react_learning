import React from "react";

const UsersDetails = ({user, getUserId}) => {

    return (
        <div className={'userDetailsBlock'}>
            <h2>User Details</h2>
            <div className={'userDetailsInfo'} >
                <div><span>id</span> - {user.id}</div>
                <div><span>name</span> - {user.name}</div>
                <div><span>username</span> - {user.username}</div>
                <div><span>email</span> - {user.email}</div>
                <div><span>phone</span> - {user.phone}</div>
                <div><span>website</span> - {user?.website}</div>
                <div><span>address</span> - <span>city</span>: {user.address.city}, <span>street</span>: {user.address.street},
                    <span>zipcode</span>: {user.address.zipcode} </div>
                <div><span>geo</span> - <span>lat</span>: {user.address.geo.lat}, <span>lng</span>: {user.address.geo.lng}</div>
            </div>
            <button onClick={() => getUserId(user.id)}>Show user posts</button>
        </div>
    );
};

export default UsersDetails;