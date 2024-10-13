import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import AppLayout from "../layouts/AppLayout";
import Post from "../pages/posts";
import ShowPost from "../pages/posts/show";
import { posts, postById } from "../apis/loader";

import ErrorPage from "../components/errors/errorPage";

export const router =createBrowserRouter(
    // [
    //     {
    //         path:"/",
    //         element:<Home/>
    //     },
    //     {
    //         path:"/about",
    //         element:<About/>
    //     },
    // ]
    [
        {
            path:"/",
            element:<AppLayout/>,
            errorElement:<ErrorPage/>,
            children:[
                {
                    path:"/",
                    element:<Home/>,
                },
                {
                    path:"/about",
                    element:<About/>,
                },
                {
                    path:"/posts",
                    element:<Post/>,
                    loader:posts,
                },
                {
                    path:"/post/:id",
                    element:<ShowPost/>,
                    loader:postById,
                },
            ]

        }
    ]
);