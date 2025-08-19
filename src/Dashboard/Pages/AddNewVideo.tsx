import { useState } from "react";
import useAxiosPublic from "../../hooks/AxiosPublic";
import toast from "react-hot-toast";
import Header from "../shared/Header";

const AddNewVideo = () => {
    const [videoId, setVideoId] = useState<string>('');
    const [videoUrl, setVideoUrl] = useState<string>('');
    const [videoCategory, setVideoCategory] = useState<string>('');
    const axiosPublic = useAxiosPublic();


    const handleAddNewVideo = () => {
        const videoData = {
            videoId: videoId,
            videoUrl: videoUrl,
            videoCategory: videoCategory,
            createdBy: 'static user for now',
        }

        axiosPublic.post('/create-video', videoData)
            .then((res) => {
                console.log("Video created successfully:", res.data);
                toast.success("Video created successfully!");
            }).catch((err) => {
                toast.error(err?.response?.data?.error || "Something went wrong while creating video");
                console.error("Error creating video:", err?.response?.data?.error || err);
            })
    }


    return (
        <div className="bg-white w-full p-3">
            <Header heading="Add New Video" />
            <div className="mb-10 mt-10">
                <div className=" mb-5  ">
                    <div className="gap-3 grid grid-cols-2 mb-5">
                        <div>
                            <input value={videoId} onChange={(e) => setVideoId(e.target.value)} type="text" placeholder="Paste youtube video ID here" className="w-full  outline-none border rounded-md p-2 " required />
                        </div>
                        <div>
                            <input value={videoUrl} onChange={(e) => setVideoUrl(e.target.value)} type="text" placeholder="Paste youtube video URL here" className="w-full border  outline-none rounded-md p-2 " required />

                        </div>
                    </div>
                    <div>
                        <input value={videoCategory} onChange={(e) => setVideoCategory(e.target.value)} type="text" placeholder="Category" className="w-full border  outline-none rounded-md p-2 " required />

                    </div>

                </div>
                <button onClick={() => handleAddNewVideo()} className="border-l bg-white p-2 rounded-md border w-full">Submit</button>

            </div>



        </div>
    );
};

export default AddNewVideo;