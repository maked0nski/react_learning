import {Routes, Route, Navigate} from "react-router-dom"

import './App.css';
import {Layout} from "./components";
import {CarsPages, CommentsPage, NotFoundPage, PostsPage, UsersPage} from "./Pages";
import UserPageDetails from "./Pages/UserPageDetails/UserPageDetails";

function App() {

    return (
        <Routes>
            <Route path={"/"} element={<Layout/>}>
                <Route index element={<Navigate to={'users'}/>}/>

                <Route path={"users"} element={<UsersPage/>}>
                    <Route path={":id"} element={<UserPageDetails/>}>
                        {/*<Route path={"posts"} element={<UserPostPage/>}/>*/}
                    </Route>
                    {/*<Route path={`:id/albums`} element={<AlbumsPage/>}>*/}
                    {/*    <Route path={`:albumId/photo`} element={<PhotosPage/>}/>*/}
                    {/*</Route>*/}
                </Route>

                <Route path={"posts"} element={<PostsPage/>}/>

                <Route path={"comments"} element={<CommentsPage/>}/>

                <Route path={"cars"} element={<CarsPages/>}/>

                <Route path={"*"} element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    );
}

export default App;
