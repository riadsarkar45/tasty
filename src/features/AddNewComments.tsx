import { useState } from "react";
import EmojiPicker, { type EmojiClickData } from "emoji-picker-react";

const AddNewComments = () => {
    const [comment, setComment] = useState("");
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);

    const handleEmojiClick = (emojiData: EmojiClickData) => {
        setComment((prev) => prev + emojiData.emoji);
    };

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
                        <button>Comment</button>
                    </div>
                </div>

                <div className="flex items-center justify-center">
                    <h2>No Comments to show</h2>
                </div>
            </div>

            {showEmojiPicker && (
                <div className="absolute z-10 top-full left-0 mt-2">
                    <EmojiPicker onEmojiClick={handleEmojiClick} />
                </div>
            )}
        </div>
    );
};

export default AddNewComments;
