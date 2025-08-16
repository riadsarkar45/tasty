import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar&Header/Sidebar";
import { Toaster } from "react-hot-toast";

const DashboardRoot = () => {
    return (
        <div className="flex gap-2">
            <Sidebar />
            <Outlet />
            <Toaster />
        </div>
    );
};

export default DashboardRoot;