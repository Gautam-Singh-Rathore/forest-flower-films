import { createBrowserRouter } from "react-router";
import AboutPage from "../pages/AboutPage";
import MediaPage from "../pages/MediaPage";
import FilmsPage from "../pages/FilmsPage";
import HomePage from "../pages/HomePage";
import App from "../App";
import RecognitionPage from "../pages/RecognitionPage";

export const myRoute = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"/",
                element:<HomePage/>
            },
            {
                path:"/about",
                element:<AboutPage/>
            },
            {
                path:"/media",
                element:<MediaPage/>
            },
            {
                path:"/films",
                element:<FilmsPage/>
            },
            {
                path:"/recognition",
                element:<RecognitionPage/>
            }
        ]
    },
    

])


