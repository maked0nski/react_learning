import React, {useEffect} from 'react';
import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import css from './userPageDetails.module.css';
import {getUserById} from "../../store";


const UserPageDetails = () => {

    const {id} = useParams();

    const {user, status, error} = useSelector(state => state['userReducer']);

    const dispatch = useDispatch();

    useEffect(() => {
        if (!user) {
            dispatch(getUserById({id:id}))
        }
    }, [user])

    return (
        <>
            <div className={css.detailsUser}>
                <h1>Users Page Details</h1>
                {status === "pending" && <h1>Data loading...</h1>}
                {error && <h2 className={'error'}>{error}</h2>}
                {user && (<>
                    <div>Id: <span>{user.id}</span></div>
                    <div>Name: <span>{user.name}</span></div>
                    <div>Username: <span>{user.username}</span></div>
                    <div>Phone: <span>{user.phone}</span></div>
                    <div>E-mail: <span>{user.email}</span></div>
                    <div>Web-site: <span>{user.website}</span></div>
                    <div>Address: city - <span>{user.address?.city}</span></div>
                    <div>street: <span>{user.address?.street}</span></div>
                    <div>zipcode: <span>{user.address?.zipcode}</span></div>
                    <div>Company: <span>{user.company?.name}</span></div>
                    <div>catchPhrase: <span>{user.company?.catchPhrase}</span></div>
                    <Link to={`posts`}>
                        <button className={'btn btn-primary'}>All user posts</button>
                    </Link></>)}
            </div>
            {/*<Outlet/>*/}
        </>
    );
};

export default UserPageDetails;