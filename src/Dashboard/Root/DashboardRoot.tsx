import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar&Header/Sidebar";
import { Toaster } from "react-hot-toast";

const DashboardRoot = () => {
    return (
        <div className="flex">
            {/* Sidebar */}
            <Sidebar />

            {/* Main content */}
            <div className="ml-[14rem] flex-1">
                <Outlet />
            </div>

            <Toaster />
        </div>
    );
};

export default DashboardRoot;
