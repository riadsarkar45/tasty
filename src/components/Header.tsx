import { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import useLoggedInUser from "../hooks/GetUserRole";

const Header = () => {
    const { user } = useLoggedInUser();
    return (
        <div>
            <div className="bg-gray-50 mb-2 border-b border-b-gray-300 p-5 flex justify-between items-center">
                <Link to={`/`}><h1 className="font-extrabold">{'LearnLy'}</h1></Link>
                <div className="flex gap-2">
                    <Link to='/dashboard'><h2>Dashboard</h2></Link>
                    {
                        user ? (
                            <div className="flex gap-3">
                                <h2>{user?.userName}</h2>
                                <Link to={'/scoreboard'}>Scored Board</Link>
                                <h2>Logout</h2>
                            </div>
                        ) : <Link to='/login'><h2>Login</h2></Link>
                    }
                </div>
                <Toaster />
            </div>
        </div>
    );
};

export default Header;