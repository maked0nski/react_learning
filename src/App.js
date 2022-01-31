import {Routes, Route, Navigate} from "react-router-dom"

import './App.css';
import {Layout} from "./components";
import {CarsPages, CommentsPage, NotFoundPage, PostsPage, UsersPage} from "./Pages";

function App() {

    return (
        <Routes>
            <Route path={"/"} element={<Layout/>}>
                <Route index element={<Navigate to={'users'}/>}/>

                <Route path={"users"} element={<UsersPage/>}/>

                <Route path={"posts"} element={<PostsPage/>}/>

                <Route path={"comments"} element={<CommentsPage/>}/>

                <Route path={"cars"} element={<CarsPages/>}/>

                <Route path={"*"} element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    );
}

export default App;
