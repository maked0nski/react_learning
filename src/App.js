import {Routes, Route, Navigate} from "react-router-dom";
import {Layout} from "./conponents";

import {
    AlbumsPage,
    NotFoundPage, PhotosPage,
    PostPageComments,
    PostPageDetails,
    PostsPage,
    UserPostPage,
    UsersPage,
    UsersPageDetails
} from "./pages";


function App() {
    return (
        <Routes>
            <Route path={"/"} element={<Layout/>}>
                <Route index element={<Navigate to={'users'}/>}/>

                <Route path={"users"} element={<UsersPage/>}>
                    <Route path={":id"} element={<UsersPageDetails/>}>
                        <Route path={"posts"} element={<UserPostPage/>}/>
                    </Route>
                    <Route path={`:id/albums`} element={<AlbumsPage/>}>
                        <Route path={`:albumId/photo`} element={<PhotosPage/>}/>
                    </Route>
                </Route>

                <Route path={"posts"} element={<PostsPage/>}>
                    <Route path={':id'} element={<PostPageDetails/>}>
                        <Route path={'comments'} element={<PostPageComments/>}/>
                    </Route>
                </Route>

                <Route path={"*"} element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    );
}

export default App;
