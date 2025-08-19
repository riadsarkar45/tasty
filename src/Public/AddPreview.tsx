
const AddPreview = ({ ads, videoTitle }) => {
    return (
        <div>
            <div className="bg-white p-2  mb-2 border-b shadow-sm rounded-md">
                {videoTitle || 'Looking for video title...'}
            </div>
            <div className="bg-gray-50 rounded-md shadow-sm flex h-[16rem] border border-gray-200 items-center justify-center">
                {
                    ads?.type === 'image' ? (
                        <img
                            src={ads.imageUrl}
                            alt="Active Ad"
                            className="max-h-full max-w-full object-contain"
                            onError={(e) => {
                                console.error('Image failed to load:', ads.imageUrl);
                                (e.target as HTMLImageElement).style.opacity = '0.5';
                            }}
                        />
                    ) : ads?.type === 'poll' ? (
                        <div className="text-center gap-6 px-2 flex justify-between">
                            <h3 className="font-bold">{ads.question}</h3>
                            <ul className="mt-4 space-y-1 text-sm">
                                {ads.options.map((opt, i) => (
                                    <li key={i} className="p-1 bg-blue-100 w-[10rem] rounded">
                                        {opt?.options}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ) : ads?.type === 'onlyText' ? (
                        <div>
                            <h2>
                                {ads?.textTitle}
                            </h2>
                            <p>{ads?.textDesc}</p>
                        </div>
                    ) : null
                }
            </div>
        </div>
    );
};

export default AddPreview;