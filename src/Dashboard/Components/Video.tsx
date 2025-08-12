import YouTube, { type YouTubeProps } from 'react-youtube';

const Video = ({ videoId, opts, upcomingUpAd, createdPolls, onlyTexts, hoverTime, formatTime, onPlayerReady, onPlayerStateChange, currentTime, imageAds, duration, hoverPercent, progressBarRef, handleMouseMove, setHoverTime, handleProgressBarClick }) => {
    return (
        <div className="h-[27rem] bg-white p-2">
            {/* Video Player */}
            <div className="w-[40rem]  h-[25rem] rounded-lg shadow overflow-hidden">
                <YouTube
                    videoId={videoId}
                    opts={opts}
                    onReady={onPlayerReady}
                    onStateChange={onPlayerStateChange}
                    className="w-full h-full"
                />

            </div>
            <div className="px-3 py-1  text-sm ">
                {formatTime(currentTime)} / {formatTime(duration)}
            </div>
            {/* Progress Bar */}
            <div className="bg-white p-3 rounded-md shadow mt-2">
                {duration > 0 ? (
                    <div
                        ref={progressBarRef}
                        className="relative w-full max-w-xl bg-gray-300 rounded-full h-3 overflow-hidden cursor-pointer"
                        onMouseMove={handleMouseMove}
                        onMouseLeave={() => {
                            setHoverTime(null);
                        }}
                        onClick={handleProgressBarClick}
                    >
                        {/* Blue Progress Fill */}
                        <div
                            className="absolute top-0 left-0 h-full bg-blue-500 rounded"
                            style={{
                                width: `${(currentTime / duration) * 100}%`,
                                zIndex: 2,
                            }}
                        />

                        {/* Red Ad Markers */}
                        {upcomingUpAd?.map((ad) => {
                            const startPercent = (ad.startTime / duration) * 100;
                            const widthPercent = (ad.duration / duration) * 100;
                            return (
                                <div
                                    key={ad.id}
                                    className={`absolute top-0 h-full ${ad.adType === 'poll' && 'bg-yellow-500'} ${ad.adType === 'onlyText' && 'bg-red-500'} ${ad.adType === 'image' && 'bg-red-900'} opacity-70 pointer-events-none rounded`}
                                    style={{
                                        left: `${startPercent}%`,
                                        width: `${widthPercent}%`,
                                        zIndex: 1,
                                    }}
                                />
                            );
                        })}

                        {/* Hover Tooltip & Marker */}
                        {hoverTime !== null && (
                            <>
                                {/* Vertical line */}
                                <div
                                    className="absolute top-0 bottom-0 w-0.5 bg-white shadow-sm"
                                    style={{
                                        left: `${hoverPercent}%`,
                                        zIndex: 4,
                                    }}
                                />

                                {/* Tooltip */}
                                <div
                                    className="absolute top-[-2.5rem] left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap"
                                    style={{
                                        left: `${hoverPercent}%`,
                                        zIndex: 5,
                                    }}
                                >
                                    {formatTime(hoverTime)}
                                </div>

                                {/* Circle dot */}
                                <div
                                    className="absolute top-1/2 left-1/2 w-2 h-2 bg-white border-2 border-blue-400 rounded-full transform -translate-x-1/2 -translate-y-1/2"
                                    style={{
                                        left: `${hoverPercent}%`,
                                        zIndex: 5,
                                    }}
                                />
                            </>
                        )}
                    </div>
                ) : (
                    <div className="w-full h-3 bg-gray-300 rounded-full flex items-center justify-center text-xs text-gray-500">
                        Loading...
                    </div>
                )}
            </div>
        </div>
    );
};

export default Video;