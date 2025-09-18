import YouTube from 'react-youtube';
import Progressbar from '../../components/Progressbar';

const Video = (
    {
        videoId,
        playerRef,
        setCurrentTime,
        opts,
        addPreview,
        formatTime,
        onPlayerReady,
        onPlayerStateChange,
        currentTime,
        duration,
        incomingAd
    }) => {
    return (
        <div className="h-[27rem] bg-white p-2 shadow-md rounded-md">
            {/* Video Player */}
            <div className="w-[38rem]  h-[25rem] rounded-lg overflow-hidden">
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

            {
                duration > 0 ? (
                    <Progressbar
                        duration={duration}
                        currentTime={currentTime}
                        playerRef={playerRef}
                        setCurrentTime={setCurrentTime}
                        videoTitle=''
                        upcomingUpAd={incomingAd}
                    />
                ) : <h2>Working on it...</h2>
            }


        </div>
    );
};

export default Video;