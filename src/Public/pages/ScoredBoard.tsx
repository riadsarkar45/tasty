
const ScoredBoard = () => {
    const thumbnailUrl = `https://img.youtube.com/vi/${`90fw4fuYZlc`}/mqdefault.jpg`;

    return (
        <div className="w-[75%] m-auto ">
            <div className="flex gap-2">
                <div className="border h-[20rem] w-[45rem] border-yellow-500 bg-white rounded-md p-5 mb-3">
                    <img className="rounded-[15rem] h-[15rem] w-[15rem] bg-cover" src={thumbnailUrl} alt="" />
                </div>
                <div className="grid grid-cols-2">
                    <div className="bg-white p-2 border-l-[0.5rem] border-yellow-200 border-bg-opacity-25 w-[15rem]">
                        <h2 className="text-sm font-extralight">Watch Time</h2>
                        <div className="flex items-center h-[6.5rem] justify-center text-[3rem]">
                            45hrs
                        </div>
                    </div>
                    <div className="bg-white p-2 border-l-[0.5rem] border-gray-200  border-bg-opacity-25 w-[15rem]">
                        <h2 className="text-sm font-extralight">Total Submission</h2>
                        <div className="flex items-center h-[6.5rem] justify-center text-[3rem]">
                            45
                        </div>
                    </div>
                    <div className="bg-white p-2 border-l-[0.5rem] border-green-200 border-bg-opacity-25  h-[10rem] w-[15rem]">
                        <h2 className="text-sm font-extralight">Total Correct Answer</h2>
                        <div className="flex items-center h-[6.5rem] justify-center text-[3rem]">
                            45
                        </div>
                    </div>
                    <div className="bg-white p-2 border-l-[0.5rem] border-red-200 h border-bg-opacity-25 h-[10rem] border-t-black w-[15rem]">
                        <h2 className="text-sm font-extralight">Total Incorrect Answer</h2>
                        <div className="flex items-center h-[6.5rem] justify-center text-[3rem]">
                            57
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScoredBoard;