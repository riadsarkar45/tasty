import { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <div className="bg-gray-50 mb-2 border-b border-b-gray-300 p-5 flex justify-between items-center">
                <Link to={`/`}><h1 className="">{'LearnLy'}</h1></Link>
                <div className="flex gap-2">
                    <h2>Riad Sarkar</h2>
                    <Link to='/dashboard'><h2>Dashboard</h2></Link>
                    <h2>Logout</h2>
                </div>
                <Toaster />

            </div>
        </div>
    );
};

export default Header;