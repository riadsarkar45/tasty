

const AddPreview = ({ activeAd, seekTime, visiblePoll, hidePollAd, isVisible, activeOnlyTextAd, incomingAdType }) => {
    const formatTime = (seconds: number): string => {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    };
    return (
        <div>
            <div className="w-[24rem] h-[21rem] bg-white p-4 rounded-lg shadow">
                <h2 className="font-medium text-gray-800 mb-3">Preview</h2>
                
                <div className="border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center h-64 bg-gray-50">

                    {activeAd ? (
                        <img
                            src={activeAd.imageUrl}
                            alt="Active Ad"
                            className="max-h-full max-w-full object-contain"
                            onError={(e) => {
                                console.error('Image failed to load:', activeAd.imageUrl);
                                (e.target as HTMLImageElement).style.opacity = '0.5';
                            }}
                        />
                    ) : visiblePoll ? (
                        <div className="text-center px-2">
                            <h3 className="font-bold">{visiblePoll.question}</h3>
                            <ul className="mt-2 space-y-1 text-sm">
                                {visiblePoll.options.map((opt, i) => (
                                    <li key={i} className="p-1 bg-blue-100 rounded">
                                        {opt}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ) : activeOnlyTextAd ? (
                        <div>
                            <h2>
                                {activeOnlyTextAd?.textTitle}
                            </h2>
                            <p>{activeOnlyTextAd?.textDesc}</p>
                        </div>
                    ) : null
                    }
                </div>

                {activeAd && (
                    <p className="text-xs text-gray-600 mt-2">
                        Ad: {activeAd.id} ({formatTime(activeAd.startTime)} + {activeAd.duration}s)
                    </p>
                )}
                {visiblePoll && (
                    <p className="text-xs text-gray-600 mt-2">
                        Poll: {visiblePoll.id} ({formatTime(visiblePoll.startTime)} + {visiblePoll.duration}s)
                    </p>
                )}

                <div>
                    {
                        incomingAdType === 'ad' && (
                            <h2>Only image will show up</h2>
                        )

                    }
                    {
                        incomingAdType === 'poll' && (
                            <h2>Poll Loading...</h2>
                        )

                    }
                    {
                        incomingAdType === 'onlyText' && (
                            <h2>Questions Loading...</h2>
                        )

                    }
                </div>

            </div>

            <div className="flex gap-2 bg-white p-2 shadow-md rounded-md mt-2">
                <button onClick={() => hidePollAd('poll')} className="bg-gray-200 bg-opacity-20 hover:bg-gray-200 p-1 border rounded-md">🅿️</button>
                <button onClick={() => hidePollAd('ad')} className="bg-gray-200 bg-opacity-20 hover:bg-gray-200 font-extrabold text-yellow-500 p-1 border rounded-md">AD</button>
                <button onClick={() => hidePollAd('desc')} className="bg-gray-200 bg-opacity-20 hover:bg-gray-200 p-1 border rounded-md">🗨️</button>
                {
                    isVisible === 'poll' || isVisible === 'ad' || isVisible === 'desc' ? (
                        <button className="bg-gray-200 bg-opacity-20 hover:bg-gray-200 p-1 border rounded-md" onClick={() => hidePollAd('hide')}>👁️</button>
                    ) : null
                }
            </div>


        </div>
    );
};

export default AddPreview;