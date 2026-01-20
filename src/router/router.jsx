import {
    createBrowserRouter,
} from "react-router-dom";
import Layout from "../layouts/layout";
import Hero from "../components/Hero";
import Login from "../pages/Login";
import Register from "../pages/Register";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,

        
        children: [
            {
                path: "/",
                element: <Hero />,

            },

            {
                path: "login",
                element: <Login />,
            },

            {
                path: "register",
                element:<Register /> ,
            }
        ]
    },
]);