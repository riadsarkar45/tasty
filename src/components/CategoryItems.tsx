import { Link } from "react-router-dom";

const CategoryItems = ({ videos }) => {
    return (
        <div>
            {videos.map((video, i) => (
                <div key={i}>
                    {/* Show ad after every 2 posts */}
                    {(i + 1) % 2 === 0 && (
                        <div className="bg-red-500 bg-opacity-30 lg:h-[15rem] h-[6rem] flex items-center justify-center my-5 rounded-md">
                            <h2 className="text-xl font-bold">Advertisement</h2>
                        </div>
                    )}

                    {/* Video Post */}
                    <div className="bg-white mt-5 rounded-md mb-4">
                        <div className="border-b mb-5 text-2xl">
                            <h2>{video.categoryName}</h2>
                        </div>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
                            {video?.videos.map((item, index) => (
                                <div key={index}>
                                    <Link to={`/watch/${item.videoId}`}>
                                        <img
                                            src={`https://img.youtube.com/vi/${item.videoId}/mqdefault.jpg`}
                                            alt=""
                                            className="h-[10rem]"
                                        />
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>

    );
};

export default CategoryItems;