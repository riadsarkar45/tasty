import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/AxiosPublic";
import toast from "react-hot-toast";
import Header from "../shared/Header";
import useLoggedInUser from "../../hooks/GetUserRole";

const AddNewVideo = () => {
    const [videoId, setVideoId] = useState<string>('');
    const [videoUrl, setVideoUrl] = useState<string>('');
    const [videoCategory, setVideoCategory] = useState<string>('');
    const [videoTitle, setVideoTitle] = useState<string>('')
    const [videoDesc, setVideoDesc] = useState<string>('')
    const axiosPublic = useAxiosPublic();
    const { user } = useLoggedInUser();
    const handleAddNewVideo = () => {
        const videoData = {
            videoId: videoId,
            videoTitle: videoTitle,
            videoDesc: videoDesc,
            videoUrl: videoUrl,
            videoCategory: videoCategory,
            createdBy: user.userName,
        }

        axiosPublic.post('/create-video', videoData)
            .then(() => {
                setVideoCategory('')
                setVideoDesc('')
                setVideoUrl('')
                setVideoId('')
                setVideoTitle('')
                toast.success("Video created successfully!");
            }).catch((err) => {
                toast.error(err?.response?.data?.error || "Something went wrong while creating video");
                console.error("Error creating video:", err?.response?.data?.error || err);
            })
    }


    useEffect(() => {
        if (videoUrl) {
            try {
                let id: string | null = null;

                if (videoUrl.startsWith("http")) {
                    const urlObj = new URL(videoUrl);
                    id = urlObj.searchParams.get("v") || urlObj.pathname.slice(1);
                } else {
                    id = videoUrl;
                }

                if (id) setVideoId(id);
            } catch (err) {
                console.log(err);
                console.error("Invalid URL:", videoUrl);
            }
        } else {
            setVideoId(""); 
        }
    }, [videoUrl]); 

    return (
        <div className="bg-white w-full p-3">
            <Header heading="Add New Video" />
            <div className="mb-10 mt-10">
                <div className=" mb-5  ">
                    <div className="gap-3 grid grid-cols-2 mb-5">
                        <div>
                            <small>Video Title</small>
                            <input value={videoTitle} onChange={(e) => setVideoTitle(e.target.value)} type="text" placeholder="Paste youtube video Title here" className="w-full  outline-none border rounded-md p-2 " required />
                        </div>

                        <div>
                            <small>Video Url</small>

                            <input value={videoUrl} onChange={(e) => setVideoUrl(e.target.value)} type="url" placeholder="Paste youtube video URL here" className="w-full border  outline-none rounded-md p-2 " required />
                        </div>
                        <div>
                            <small>Video Id</small>
                            <input value={videoId} readOnly onChange={(e) => setVideoId(e.target.value)} type="text" placeholder="Paste youtube video ID here" className="w-full  outline-none border rounded-md p-2 " required />
                        </div>



                        <div>
                            <small>Category</small>

                            <input value={videoCategory} onChange={(e) => setVideoCategory(e.target.value)} type="text" placeholder="Category" className="w-full border  outline-none rounded-md p-2 " required />

                        </div>
                    </div>

                    <div className="w-full">
                        <small>Description</small>
                        <textarea value={videoDesc} onChange={(e) => setVideoDesc(e.target.value)} className="w-full h-[8rem] outline-none border rounded-md p-2" placeholder="Description" name=""></textarea>
                    </div>

                </div>
                <button onClick={() => handleAddNewVideo()} className="border-l bg-white p-2 rounded-md border w-full">Submit</button>

            </div>



        </div>
    );
};

export default AddNewVideo;