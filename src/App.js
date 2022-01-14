import './App.css';

import Users from "./components/Users";
import Posts from "./components/Posts";
import Comments from "./components/Comments";
import {useState} from "react";
import UsersDetails from "./components/UsersDetails";

function App() {
    const [user, setUser] = useState(null);
    const [userId, setUserId] = useState(null);
    const [postId, setPostId] = useState(null);

    const getUser = (user) => {
        setUser(user)
        setUserId(null)
        setPostId(null)
    }

    const getUserId = (userId) => {
        setUserId(userId)
    }

    const getPostId = (postId) => {
        setPostId(postId)
    }

    return (
        <>
            <h1>All info</h1>
            <div className={'wrapUsers'}>
            <Users getUser={getUser}/>
            {user && <UsersDetails user={user} getUserId={getUserId}/>}
        </div>
            {userId && <Posts userId={userId} getPostId={getPostId}/>}

            {postId && <Comments postId={postId}/>}
        </>
    );
}

export default App;
