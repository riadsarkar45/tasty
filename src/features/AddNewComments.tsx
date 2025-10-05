import { useState } from "react";
import EmojiPicker, { type EmojiClickData } from "emoji-picker-react";
import { useParams } from "react-router-dom";
import useAxiosPrivate from "../hooks/AxiosPrivate";

const AddNewComments = ({ comments }) => {
    const [comment, setComment] = useState("");
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const axiosPrivate = useAxiosPrivate();
    const handleEmojiClick = (emojiData: EmojiClickData) => {
        setComment((prev) => prev + emojiData.emoji);
    };

    const { videoId } = useParams();

    console.log(videoId, 'from add new comments');

    const handleSubmitComments = () => {
        console.log('clicked');
        axiosPrivate.post('/comment-video', { comment, videoId })
            .then((res) => { console.log(res.data); })
            .catch((e) => console.log(e))
    }

    return (
        <div className="relative w-full">
            <div className="w-full items-center">
                <input
                    type="text"
                    placeholder="Comment as Riad Sarkar"
                    className="p-2 w-full outline-none border-b"
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
