import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar&Header/Sidebar";

const DashboardRoot = () => {
    return (
        <div className="flex gap-2">
            <Sidebar />
            <Outlet />
        </div>
    );
};

export default DashboardRoot;