import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import DashboardRoot from "../Dashboard/Root/DashboardRoot";
import AddNewVideo from "../Dashboard/Pages/AddNewVideo";
import CreateNewAdd from "../Dashboard/Feautres/CreateNewAdd";
import PublicView from "../Public/pages/PublicView";
import Details from "../Public/pages/Details";
import Videos from "../Dashboard/Pages/Videos";
import Register from "../Public/pages/Register";
import Login from "../Public/pages/Login";
import Users from "../Dashboard/Pages/Users";

const Routers = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <PublicView />
            },
            {
                path: "/watch/:videoId?",
                element: <Details />
            }
        ]
    },
    {
        path: "/register",
        element: <Register />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/dashboard",
        element: <DashboardRoot />,
        children: [
            {
                path: "/dashboard",
                element: 'lets see',
            },
            {
                path: '/dashboard/AddNewVideo',
                element: <AddNewVideo />
            },
            {
                path: '/dashboard/addnewad/:videoId?',
                element: <CreateNewAdd />
            },

            {
                path: '/dashboard/videos',
                element: <Videos />
            },

            {
                path: '/dashboard/users',
                element: <Users/>
            }

        ]
    }
])

export default Routers;