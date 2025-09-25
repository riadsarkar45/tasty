import React, { useRef } from "react";
import Draggable from "react-draggable";

const Notes = ({ notes }) => {
    const nodeRef = useRef(null);
    console.log(notes, 'notes in notes component');
    return (
        <Draggable nodeRef={nodeRef}>
            <div
                ref={nodeRef}
                className="bg-blue-500 text-white p-3 rounded-lg shadow-md w-full cursor-move"
            >
                {notes?.noteText || "No notes available"}
            </div>
        </Draggable>
    );
};

export default Notes;
