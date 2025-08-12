import { Link } from "react-router-dom";

const Sidebar = () => {
    return (

        <div className="bg-white gap-5 w-[14rem] p-2 border-r border-gray-300 h-[100vh]">
            <div className="bg-gray-200 rounded-md mb-2 text-gray-700 p-2">
                <Link to={'/dashboard'}> <h2>Home</h2></Link>
            </div>
            <div className="bg-gray-200 rounded-md mb-2 text-gray-700 p-2">
                <Link to={'/dashboard/AddNewVideo'}> <h2>Add New Video</h2></Link>
            </div>
            <div className="bg-gray-200 rounded-md mb-2 text-gray-700 p-2">
                <Link to={'/dashboard/addnewadd'}> <h2>Add New Add</h2></Link>
            </div>
        </div>
    );
};

export default Sidebar;