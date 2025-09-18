

const AddPreview = ({ formatTime, formType, hidePollAd, currentTime, incomingAd, inComingAdType, handleSetPolls }) => {
    return (
        <div>
            <div className="w-[24rem] h-[21rem] bg-white p-4 rounded-lg shadow">
                <h2 className="font-medium text-gray-800 mb-3">Preview</h2>

                <div className="border-2 border-dashed border-gray-300 rounded-lg flex  items-center justify-center h-64 bg-gray-50">
                    {
                        incomingAd?.type === 'image' ? (
                            <img
                                src={incomingAd.imageUrl}
                                alt="Active Ad"
                                className="h-full w-full object-contain"
                                onError={(e) => {
                                    console.error('Image failed to load:', incomingAd.imageUrl);
                                    (e.target as HTMLImageElement).style.opacity = '0.5';
                                }}
                            />
                        ) : incomingAd?.type === 'poll' ? (
                            <div className="text-center gap-6 px-2 flex justify-between">
                                <h3 className="font-bold">{incomingAd.question}</h3>
                                <ul className="mt-4 space-y-1 text-sm">
                                    {incomingAd.options.map((opt, i) => (
                                        <li key={i} className="p-1 bg-blue-100 w-[10rem] rounded">
                                            {opt?.options}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ) : incomingAd?.type === 'onlyText' ? (
                            <div>
                                <h2>
                                    {incomingAd?.textTitle}
                                </h2>
                                <p>{incomingAd?.textDesc}</p>
                            </div>
                        ) : null
                    }

                </div>

                <div>
                    {
                        inComingAdType?.type === 'image' && (
                            // <h2>Ad in {formatTime(inComingAdType?.startTime - currentTime)}</h2>
                            <span className="font-mono text-6xl">
                                {formatTime(inComingAdType?.startTime - currentTime)}
                            </span>
                        )

                    }
                    {
                        inComingAdType?.type === 'poll' && (
                            <h2>Poll in {formatTime(inComingAdType?.startTime - currentTime)}</h2>
                        )

                    }
                    {
                        inComingAdType?.type === 'onlyText' && (
                            <h2>Qestion in {formatTime(inComingAdType?.startTime - currentTime)}</h2>
                        )

                    }
                </div>

            </div>

            <div className="flex gap-2 bg-white p-2 shadow-md rounded-md mt-2">
                <button onClick={() => hidePollAd('poll')} className="bg-gray-200 bg-opacity-20 hover:bg-gray-200 p-1 border rounded-md">🅿️</button>
                <button onClick={() => hidePollAd('ad')} className="bg-gray-200 bg-opacity-20 hover:bg-gray-200 font-extrabold text-yellow-500 p-1 border rounded-md">AD</button>
                <button onClick={() => hidePollAd('desc')} className="bg-gray-200 bg-opacity-20 hover:bg-gray-200 p-1 border rounded-md">🗨️</button>
                <button onClick={() => handleSetPolls()} className="bg-gray-200 bg-opacity-20 hover:bg-gray-200 p-1 border rounded-md">🆗</button>
                {
                    formType === 'poll' || formType === 'ad' || formType === 'desc' ? (
                        <button className="bg-gray-200 bg-opacity-20 hover:bg-gray-200 p-1 border rounded-md" onClick={() => hidePollAd('hide')}>👁️</button>
                    ) : null
                }
            </div>


        </div>
    );
};

export default AddPreview;