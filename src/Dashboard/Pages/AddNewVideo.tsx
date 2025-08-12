
const AddNewVideo = () => {
    return (
        <div className="mt-[6rem]">
            <div>
                <div className="border mb-10 border-gray-200 flex w-[25rem] rounded-md bg-white">
                    <input type="text" placeholder="Paste youtube video url here" className="w-[25rem] rounded-md p-2 " />
                    <button className="border-l border w-[3rem]">+</button>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
                <div className="bg-white flex items-center justify-center h-[13rem] w-[20rem] max-w-md aspect-square">
                    <iframe
                        src="https://www.youtube.com/embed/USccSZnS8MQ?si=MWHmd7PeAAbFqnSr"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        className="w-full h-full rounded-lg"
                    />
                </div>
                <div className="bg-white flex items-center justify-center h-[13rem] w-[20rem] max-w-md aspect-square">
                    <iframe
                        src="https://www.youtube.com/embed/USccSZnS8MQ?si=MWHmd7PeAAbFqnSr"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        className="w-full h-full rounded-lg"
                    />
                </div>
                <div className="bg-white flex items-center justify-center h-[13rem] w-[20rem] max-w-md aspect-square">
                    <iframe
                        src="https://www.youtube.com/embed/USccSZnS8MQ?si=MWHmd7PeAAbFqnSr"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        className="w-full h-full rounded-lg"
                    />
                </div>
                <div className="bg-white flex items-center justify-center h-[13rem] w-[20rem] max-w-md aspect-square">
                    <iframe
                        src="https://www.youtube.com/embed/USccSZnS8MQ?si=MWHmd7PeAAbFqnSr"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        className="w-full h-full rounded-lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default AddNewVideo;