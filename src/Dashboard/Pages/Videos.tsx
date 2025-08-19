import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/AxiosPublic";
import { Link } from "react-router-dom";
import Loading from "../Components/Loading";

const Videos = () => {
    const [createdVideos, setCreatedVideos] = useState<any>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const axiosPublic = useAxiosPublic();
    useEffect(() => {
        axiosPublic.get('/videos')
            .then((res) => {
                setCreatedVideos(res.data);
                console.log(res.data);
                setIsLoading(false);
            }).catch((err) => {
                console.error("Error fetching videos:", err);
            })
    }, [axiosPublic]);
    if (isLoading) {
    return (
      <Loading isLoading={isLoading} />
    )
  }
    return (
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
                                    <td className="px-6 py-4">
                                        {
                                            video?.items.length > 0 ?
                                                <small className="bg-green-500 bg-opacity-45 text-green-800 p-1 rounded-md">{video?.items?.length ?? 0} Active ads</small>
                                                :
                                                <small className="bg-red-500 bg-opacity-45 text-red-800 p-1 rounded-md">No ad or poll created</small>
                                        }
                                    </td>
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
    );
};

export default Videos;