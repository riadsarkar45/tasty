import { NavLink } from "react-router-dom";

const Sidebar = () => {
    const linkClass = ({ isActive }: { isActive: boolean }) =>
        `block rounded-md mb-2 p-2 ${
            isActive ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
        }`;

    return (
        <div className="fixed top-0 left-0 bg-white gap-5 w-[14rem] p-2 border-r border-gray-300 h-[100vh] overflow-y-auto">
            
            <NavLink to="/dashboard" end className={linkClass}>
                Home
            </NavLink>
            
            <NavLink to="/dashboard/AddNewVideo" className={linkClass}>
                Add New Video
            </NavLink>
            
            <NavLink to="/dashboard/addnewad" className={linkClass}>
                Add New Add
            </NavLink>
            <NavLink to="/dashboard/videos" className={linkClass}>
                All Videos
            </NavLink>
            <NavLink to="/dashboard/edit-image" className={linkClass}>
                Edit Image
            </NavLink>
        </div>
    );
};

export default Sidebar;
