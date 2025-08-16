import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/AxiosPublic";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const AddNewVideo = () => {
    const [videoId, setVideoId] = useState<string>('');
    const [videoUrl, setVideoUrl] = useState<string>('');
    const [createdVideos, setCreatedVideos] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const axiosPublic = useAxiosPublic();

    useEffect(() => {
        axiosPublic.get('/videos')
            .then((res) => {
                setCreatedVideos(res.data);
            }).catch((err) => {
                console.error("Error fetching videos:", err);
            })
    }, [axiosPublic]);

    const handleAddNewVideo = () => {
        setIsLoading(true);
        if(isLoading) toast.loading("Wait a moment...");
        const videoData = {
            videoId: videoId,
            videoUrl: videoUrl,
            createdBy: 'static user for now',
        }
        setCreatedVideos((prev) => [...prev, videoData]);

        axiosPublic.post('/create-video', videoData)
            .then((res) => {
                console.log("Video created successfully:", res.data);
                setIsLoading(false);
                toast.success("Video created successfully!");
            }).catch((err) => {
                console.error("Error creating video:", err);
            })
    }
    return (
        <div className="mt-[1rem] w-full p-3">
            <div>
                <div className="border mb-10 border-gray-200 gap-3 w-[40rem] flex items-center justify-center rounded-md">
                    <input value={videoId} onChange={(e) => setVideoId(e.target.value)} type="text" placeholder="Paste youtube video ID here" className="w-[20rem] border-gray-500 outline-none border rounded-md p-2 " />
                    <input value={videoUrl} onChange={(e) => setVideoUrl(e.target.value)} type="text" placeholder="Paste youtube video URL here" className="w-[20rem] border border-gray-500 outline-none rounded-md p-2 " />
                    <button onClick={() => handleAddNewVideo()} className="border-l bg-white p-2 rounded-md border w-[3rem]">+</button>

                </div>
            </div>



            <div>
                <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Video
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Created By
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Created At
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Status
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                createdVideos?.map((video, i) =>
                                    <tr key={i} className="bg-white border-b   border-gray-200">
                                        <th
                                            scope="row"
                                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                        >
                                            <img className="w-[8rem] h-[4rem]" src={`https://img.youtube.com/vi/${video.videoId}/mqdefault.jpg`} alt="" />
                                        </th>
                                        <td className="px-6 py-4">{video.createdBy}</td>
                                        <td className="px-6 py-4">{video.createdAt}</td>
                                        <td className="px-6 py-4">No ad created</td>
                                        <td className="px-6 py-4">
                                            <Link to={`/dashboard/addnewad/${video.videoId}`}>
                                                <small className="bg-yellow-500 bg-opacity-45 text-yellow-800 p-1 rounded-md">Set Ad</small></Link> |
                                            <small className="bg-red-500 bg-opacity-45 text-red-800 p-1 rounded-md">Delete</small>
                                        </td>
                                    </tr>
                                )
                            }

                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default AddNewVideo;