import {
    Routes,
    Route
} from "react-router-dom";

import css from './App.module.css';
import HomePage from "./pages/HomePage/HomePage";
import PostsPage from "./pages/PostsPage/PostsPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import UsersPage from "./pages/UsersPage/UsersPage";
import Layout from "./conponents/Layout/Layout";
import DetailsUser from "./pages/DetailsUsersPage/DetailsUser";

function App() {
    return (
        <>
            <Routes>
                <Route path={"/"} element={<Layout/>}>
                    <Route  element={<HomePage/>}/>
                    <Route path={"users"} element={<UsersPage/>}>
                        <Route path={":id"} element={<DetailsUser/>}></Route>
                        <Route path={":id/posts"} element={<PostsPage/>}/>
                    </Route>
                    <Route path={"posts"} element={<PostsPage/>}/>
                    <Route path={"*"} element={<NotFoundPage/>}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;
