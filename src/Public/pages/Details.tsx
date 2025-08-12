import { useEffect, useRef, useState } from "react";
import type { YouTubeProps } from "react-youtube";
import YouTube from "react-youtube";
import AddNewComments from "../../features/AddNewComments";
// Ad type
type ImageAd = {
  id: string;
  imageUrl: string;
  startTime: number; // in seconds
  duration: number;  // in seconds
};

const formatTime = (seconds: number): string => {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
};

const Details = () => {
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [activeAd, setActiveAd] = useState<ImageAd | null>(null);

    const playerRef = useRef<null>(null);
    const intervalRef = useRef<number | null>(null);

    const imageAds: ImageAd[] = [
        {
            id: 'ad1',
            imageUrl: 'https://i.ibb.co/8gFhDJ2F/Screenshot-2024-12-08-145159.png',
            startTime: 1,
            duration: 15,
        },
        {
            id: 'ad2',
            imageUrl: 'https://i.ibb.co/8DYv007W/Screenshot-2024-12-08-155816.png',
            startTime: 25,
            duration: 4,
        },
        {
            id: 'ad3',
            imageUrl: 'https://i.ibb.co/nsmjcHX2/Screenshot-2024-12-05-163143.png',
            startTime: 45,
            duration: 6,
        },
    ];

    // When player is ready
    const onPlayerReady: YouTubeProps['onReady'] = (event) => {
        playerRef.current = event.target;
        const dur = event.target.getDuration();
        setDuration(dur);
    };

    // On play/pause
    const onPlayerStateChange: YouTubeProps['onStateChange'] = (event) => {
        const player = event.target;

        if (event.data === 1) {
            // Playing → start time checker
            if (intervalRef.current) clearInterval(intervalRef.current);

            intervalRef.current = window.setInterval(() => {
                const time = player.getCurrentTime();
                setCurrentTime(time);

                // Show ad if current time is within [start, start + duration]
                const showingAd = imageAds.find((ad) => {
                    return time >= ad.startTime && time < ad.startTime + ad.duration;
                });

                setActiveAd(showingAd || null);
            }, 100);
        } else {
            // Not playing → stop checking
            if (intervalRef.current) clearInterval(intervalRef.current);
        }
    };

    // Cleanup
    useEffect(() => {
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, []);



    const opts = {
        height: '100%',
        width: '100%',
        playerVars: {
            rel: 0,
            modestbranding: 1,
            enablejsapi: 1,
        },
    };
    return (
        <div className="bg-gray-50 w-[75rem] m-auto p-3">
            <div className="flex justify-between items-start gap-1">
                <div className="w-full">
                    <div className="h-[25rem] bg-black rounded-lg overflow-hidden relative">
                        <YouTube
                            videoId="p3HR9QDMj18"
                            opts={opts}
                            onReady={onPlayerReady}
                            onStateChange={onPlayerStateChange}
                            className="w-full h-full"
                        />


                    </div>



                    {/* Time Display */}
                    <div className="mb-10 items-center mt-2 text-xs text-gray-700 font-mono">
                        <span>{formatTime(currentTime)}</span>
                        <span>/</span>
                        <span>{formatTime(duration)}</span>
                    </div>
                    <div>
                        <AddNewComments />
                    </div>
                </div>



                {/* RIGHT: Poll Section */}
                <div className="w-[45rem] flex flex-col gap-4">
                    {/* Poll */}
                    <div className="bg-gray-50 flex h-[16rem] border border-gray-200 items-center justify-center">
                        {activeAd && (
                            <div
                                className=""
                            >
                                <img
                                    src={activeAd.imageUrl}
                                    alt="Ad"
                                    className="w-full h-full object-cover rounded"
                                />
                            </div>
                        )}
                    </div>

                    {/* Stats */}
                    <div className="flex gap-4">
                        <div className="flex items-center gap-2 border border-gray-500 p-1 rounded-lg">
                            👁 <span>1.2k</span>
                        </div>
                        <div className="flex gap-2 items-center border border-gray-500 p-1 rounded-lg">
                            🔒 <span>2.2k</span>
                        </div>
                        <div>
                            <span className="flex items-center border border-gray-500 p-2 rounded-lg">
                                12sec
                            </span>
                        </div>
                    </div>

                    {/* Comments */}
                    <div className="bg-gray-50 border p-3 border-gray-200 h-[16rem]">
                        <div className="mt-4 border border-r-1 w-full flex items-center justify-center ">
                            <input
                                className="outline-none w-full p-2"
                                type="text"
                                placeholder="Comment as Riad Sarkar"
                            />
                            ✉️
                        </div>
                        <div className="mb-5">
                            <small>34 Comments</small>
                        </div>
                        <div>
                            <div className="flex items-center mt-2 gap-2">
                                👤 <p>This gallery is awesome</p>
                            </div>
                            <div className="flex items-center mt-2 gap-2">
                                👤 <p>This platform is very user friendly</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;