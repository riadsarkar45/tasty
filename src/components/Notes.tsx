import { useRef } from "react";
import Draggable from "react-draggable";

const Notes = ({ notes }) => {
    const nodeRef = useRef(null);
    console.log(notes, 'notes in notes component');
    return (
            <div
                ref={nodeRef}
                className="bg-gray-50 text-black p-3 rounded-lg shadow-md w-full cursor-move"
            >
                <div className="w-full border-b mb-1">
                    <small className="">Notes</small>
                </div>

                <div>
                    {notes?.noteText || "No notes available"}
                </div>
            </div>
    );
};

export default Notes;
