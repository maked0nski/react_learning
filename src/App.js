import {Routes, Route, Navigate} from "react-router-dom"

import './App.css';
import {Layout} from "./components";
import {
    CarsPages,
    CommentsPage,
    CommentsPageDetails,
    NotFoundPage,
    PostPageDetails,
    PostsPage, ProductPageDetails, ProductsPage,
    UserPageDetails,
    UsersPage
} from "./Pages";

function App() {

    return (
        <Routes>
            <Route path={"/"} element={<Layout />}>
                <Route index element={<Navigate to={'users'} />} />

                <Route path={"users"} element={<UsersPage />}>
                    <Route path={":id"} element={<UserPageDetails />}>
                    </Route>
                </Route>

                <Route path={"posts"} element={<PostsPage />}>
                    <Route path={':id'} element={<PostPageDetails />} />
                </Route>

                <Route path={"comments"} element={<CommentsPage />} >
                    <Route path={':id'} element={<CommentsPageDetails />} />
                </Route>

                <Route path={"cars"} element={<CarsPages />} />

                <Route path={"products"} element={<ProductsPage />} >
                    <Route path={':id'} element={<ProductPageDetails />} />
                </Route>

                <Route path={"*"} element={<NotFoundPage />} />
            </Route>
        </Routes>
    );
}

export default App;
