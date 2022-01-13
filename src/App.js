import './App.css';

import Users from "./components/Users";
import Posts from "./components/Posts";
import Comments from "./components/Comments";
import {useState} from "react";

function App() {
    const [userId, setUserId] = useState(0);
    const [postId, setPostId] = useState(0);

    const getUserDetails = (userId) => {
        setUserId(userId)
        setPostId(0)
    }

    const getPostId = (postId) => {
        setPostId(postId)
    }

    return (
        <>
            <Users getUserDetails={getUserDetails}/>
            <Posts userId={userId} getPostId={getPostId}/>
            <Comments postId={postId}/>
        </>
    );
}

export default App;
