import { useEffect, useState } from "react";
import EmojiPicker, { type EmojiClickData } from "emoji-picker-react";
import { useParams } from "react-router-dom";
import useAxiosPrivate from "../hooks/AxiosPrivate";
import { useSocket } from "../hooks/SocketContext";

const AddNewComments = ({ comments, setComments }) => {
    console.log(comments);
    const [comment, setComment] = useState("");
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const axiosPrivate = useAxiosPrivate();
    const { socket } = useSocket();

    const handleEmojiClick = (emojiData: EmojiClickData) => {
        setComment((prev) => prev + emojiData.emoji);
    };

    const { videoId } = useParams();

    useEffect(() => {
        if (!socket) return;
        socket?.on("newComment", (data) => {
            setComments((prevComments) => [...prevComments, data]);
            console.log("comment", data);
        })

        return () => {
            socket.off("newComment");
        }
    }, [socket, setComments]);


    const handleSubmitComments = () => {
        socket?.emit('newComment', { comment, videoId });
        console.log('clicked');
        // axiosPrivate.post('/comment-video', { comment, videoId })
        //     .then(() => {  })
        //     .catch((e) => console.log(e))
    }

    return (
        <div className="relative w-full">
            <div className="w-full items-center bg-white mt-5 p-4">
                <textarea
                    placeholder="Comment as Riad Sarkar"
                    className="p-5 rounded-md w-full outline-none border"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />
                <div className="flex justify-between mt-5">
                    <button
                        type="button"
                        onClick={() => setShowEmojiPicker((prev) => !prev)}
                        className=" text-xl"
                    >
                        😊
                    </button>
                    <div className="flex gap-3">
                        <button>Cancel</button>
                        <button onClick={() => handleSubmitComments()}>Comment</button>
                    </div>
                </div>

                <div className="mt-10">
                    <h2>{comments?.length} Comments</h2>
                    {
                        comments.length > 0 ? (
                            comments?.map((cmt, i) => (
                                <div className="flex gap-4 items-center mb-6" key={i}>
                                    <div className="bg-red-500 h-[2.5rem] w-[2.5rem] rounded-[2.5rem]"></div>
                                    <div>
                                        <h2>{cmt.userName}</h2>
                                        <small>{cmt.comment}</small>
                                    </div>
                                </div>
                            ))
                        ) : < h2 > No Comments to show</h2>

                    }
                </div>
            </div>

            {
                showEmojiPicker && (
                    <div className="absolute z-10 top-full left-0 mt-2">
                        <EmojiPicker onEmojiClick={handleEmojiClick} />
                    </div>
                )
            }
        </div >
    );
};

export default AddNewComments;
