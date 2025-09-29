
const CategoryPost = () => {
    return (
        <div className="w-[90%] m-auto">
            <h2>Category post</h2>
            <div className="flex justify-between">
                <div className="grid grid-cols-2 gap-2">
                    <div className="bg-gray-300 h-[20rem] w-[25rem]"></div>
                    <div className="bg-gray-300 h-[20rem] w-[25rem]"></div>
                    <div className="bg-gray-300 h-[20rem] w-[25rem]"></div>
                    <div className="bg-gray-300 h-[20rem] w-[25rem]"></div>
                </div>
                <div>
                    <div className="h-[20rem] w-[20rem] bg-gray-300">
                        <h2>ADD</h2>
                    </div>
                    <div className="h-[20rem] w-[20rem] mt-3 bg-gray-300">
                        <h2>ADD</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryPost;