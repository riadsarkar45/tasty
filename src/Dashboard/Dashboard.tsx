import Header from "./shared/Header";

const Dashboard = () => {
    
    return (
        <div>
            <div className="mt-2 p-1">
                <Header heading="Dashboard" />
            </div>
            <div className="p-1 grid grid-cols-3">
                <div className="w-[21.6rem] h-[10rem] border ">
                    <div className="border-b p-2">
                        <h2>Total Videos</h2>
                    </div>
                    <div className="flex justify-center items-center text-[3rem] mt-[1rem]">
                        <h2>13</h2>
                    </div>
                </div>
                <div className="w-[21.6rem] h-[10rem] border">
                    <div className="border-b p-2">
                        <h2>Total Followers</h2>
                    </div>
                    <div className="flex justify-center items-center text-[3rem] mt-[1rem]">
                        <h2>13,999</h2>

                    </div>
                </div>
                <div className="w-[21.6rem] h-[10rem] border">
                    <div className="border-b p-2">
                        <h2>Total Likes</h2>
                    </div>
                    <div className="flex justify-center items-center text-[3rem] mt-[1rem]">
                        <h2>13,999</h2>

                    </div>
                </div>
                <div className="w-[21.6rem] h-[10rem] border mt-1">
                    <div className="border-b p-2">
                        <h2>Total Comments</h2>
                    </div>
                    <div className="flex justify-center items-center text-[3rem] mt-[1rem]">
                        <h2>13,999</h2>

                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Dashboard;