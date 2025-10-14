import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/AxiosPublic";
import { useParams } from "react-router-dom";

const CategoryPost = () => {
    const [categoryPost, setCategoryPost] = useState([]);
    const [tabs, setTabs] = useState([{ name: 'Most Viewed' }, { name: 'Following' }, { name: 'Latest' }]);
    const [defaultTab, setDefaultTab] = useState('Most Viewed');
    const axiosPublic = useAxiosPublic();
    const { categoryName } = useParams();
    useEffect(() => {
        axiosPublic.get(`/api/v1/public/videos/${categoryName}`)
            .then((res) => (setCategoryPost(res.data.videos), console.log(res.data.videos)))
            .catch((err) => console.log(err));
    }, [axiosPublic, categoryName]);

    return (
        <div className="w-[90%] m-auto">
            <h2>Category post</h2>
            <div className="flex justify-between">
                <div className="grid grid-cols-2 gap-2">
                    {
                        categoryPost?.map((posts) =>
                            posts.videos?.map((video, i) =>
                                <div key={i + 1} className="p-2 h-[20rem] w-[25rem] bg-white relative">
                                    <div className="relative w-full h-full">
                                        <img
                                            className="w-full h-full object-cover"
                                            src={`https://img.youtube.com/vi/${video.videoId}/mqdefault.jpg`}
                                            alt={video.videoTitle}
                                        />
                                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t bg-blue-500 bg-opacity-30 from-black/70 to-transparent p-3">
                                            <h2 className="text-white text-lg font-semibold truncate">
                                                {video.videoTitle}
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                            )

                        )
                    }
                </div>
                <div>
                    <div className="h-[20rem] w-[20rem] mt-3 bg-gray-300">
                        <h2>ADD</h2>
                    </div>
                    <div className="h-[20rem] flex justify-between p-2 w-[20rem] bg-white">
                        {
                            tabs?.map((tab, i) =>
                                <div className=" h-[2.6rem]" key={i}>
                                    <button
                                        className={`${defaultTab === tab.name && 'bg-slate-500'}  rounded-md bg-opacity-20 border border-gray-200 p-2`}
                                        onClick={() => setDefaultTab(tab.name)}
                                    >
                                        {tab.name}
                                    </button>
                                </div>
                            )
                        }
                    </div>

                </div>
            </div>
        </div >
    );
};

export default CategoryPost;