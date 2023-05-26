import {
    createBrowserRouter
} from "react-router-dom";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Main from "../components/Main/Main";
import Blog from "../components/Blog/Blog";
import Home from "../components/Home/Home";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import ChefDetail from "../components/ChefDetail/ChefDetail";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: 'blog',
                element: <Blog />
            },
            {
                path: "/:id",
                element: <PrivateRoute><ChefDetail /></PrivateRoute>,
                loader: ({ params }) => fetch(`https://biryani-chef-server-site-r-a-bappy.vercel.app/${params.id}`)
            }

        ]
    }
]);

export default router;