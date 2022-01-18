import { render } from "react-dom";
import {
    Link,
    Routes,
    Route
} from "react-router-dom";

import css from './App.module.css';
import HomePage from "./pages/HomePage/HomePage";
import PostsPage from "./pages/PostsPage/PostsPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import UserPage from "./pages/UsersPage/UserPage";

function App() {
    return (
        <>
            <div className={css.header}>
                <Link to='/'>Home</Link>
                <Link to='users'>Users</Link>
                <Link to='posts'>Posts</Link>
            </div>

            <Routes>
                <Route path={"/"} element={<HomePage/>}/>
                <Route path={"users"} element={<UserPage/>}/>
                <Route path={"posts"} element={<PostsPage/>}/>
            </Routes>
        </>


    );
}

export default App;
