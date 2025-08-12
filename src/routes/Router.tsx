import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import DashboardRoot from "../Dashboard/Root/DashboardRoot";
import AddNewVideo from "../Dashboard/Pages/AddNewVideo";
import CreateNewAdd from "../Dashboard/Feautres/CreateNewAdd";
import PublicView from "../Public/pages/PublicView";
import Details from "../Public/pages/Details";

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
                path: "/details",
                element: <Details />
            }
        ]
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
                path: '/dashboard/addnewadd',
                element: <CreateNewAdd />
            }

        ]
    }
])

export default Routers;