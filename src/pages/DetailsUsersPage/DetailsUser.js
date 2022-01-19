import React, {useEffect, useState} from 'react';
import {Link, useLocation, useParams} from "react-router-dom";

import {userService} from "../../services/user.service";
import css from './detailsUser.module.css'

const DetailsUser = ({getUserPosts}) => {

    const {id} = useParams();
    const [user, setUser] = useState([]);
    const {state} = useLocation();

    useEffect(() => {
        if(state){
            setUser(state);
            return;
        }
        userService.getById(id).then(value => setUser({...value}))
    }, [id]);

    const {name, username, email, address, phone, website, company} = user;

    return (
        <div className={css.detailsUser}>
            <h1>Users Details</h1>
            <div>Id: <span>{id}</span></div>
            <div>Name: <span>{name}</span></div>
            <div>Username: <span>{username}</span></div>
            <div>Phone: <span>{phone}</span></div>
            <div>E-mail: <span>{email}</span></div>
            <div>Web-site: <span>{website}</span></div>
            <div>Address: city - <span>{address?.city}</span></div>
            <div>street: <span>{address?.street}</span></div>
            <div>zipcode: <span>{address?.zipcode}</span></div>
            <div>Company: <span>{company?.name}</span></div>
            <div>catchPhrase: <span>{company?.catchPhrase}</span></div>
            <Link to={'posts'}><button>All user posts</button></Link>
            {/*<Link to={`/posts?userId=${id}`}><button>All user posts</button></Link>*/}
        </div>
    );
};

export default DetailsUser;