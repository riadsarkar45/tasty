import { useEffect, useRef, useState } from "react";
import type { YouTubeProps } from "react-youtube";
import YouTube from "react-youtube";
import AddNewComments from "../../features/AddNewComments";
import useAxiosPublic from "../../hooks/AxiosPublic";
import { useParams } from "react-router-dom";
import AddPreview from "../AddPreview";
import Progressbar from "../../components/Progressbar";
import { handleMouseMove } from "../../Dashboard/shared/handleMouseMove";

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
    const [ads, setAds] = useState<ImageAd | null>(null);
    const [upComingAds, setUpComingAds] = useState([])
    const [video, setVideo] = useState([])
    const [hoverPercent, setHoverPercent] = useState<number>(0);
    const [videoTitle, setVideoTitle] = useState<string>('')

    const playerRef = useRef<null>(null);
    const intervalRef = useRef<number | null>(null);
    const axiosPublic = useAxiosPublic();
    const { videoId } = useParams();

    useEffect(() => {
        axiosPublic.get(`/videos/${videoId}`)
            .then((res) => {
                if (res?.data) {
                    setVideo(res.data);
                    console.log(res.data);
                    const extractAds = res?.data.flatMap((video: any) => video.items || []);
                    setUpComingAds(extractAds)
                    // const ads = res?.data.flatMap((video: any) => video.items || []);
                    // console.log(extractAds);
                }
            }).catch((err) => console.log(err))
    }, [axiosPublic, videoId])

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
        setVideoTitle(playerRef.current = event.target.videoTitle);
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
                const showingAd = upComingAds.find((ad) => {
                    const start = Number(ad.startTime);
                    const duration = Number(ad.duration); // make sure it's a number
                    return time >= start && time < start + duration;
                });

                console.log(showingAd);
                setAds(showingAd)

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
                        {
                            video?.map((video, i) =>
                                <YouTube
                                    key={i}
                                    videoId={video.videoId}
                                    opts={opts}
                                    onReady={onPlayerReady}
                                    onStateChange={onPlayerStateChange}
                                    className="w-full h-full"
                                />
                            )
                        }


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
                    {/* <div className="bg-gray-50 flex h-[16rem] border border-gray-200 items-center justify-center">
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
                    </div> */}
                    <AddPreview ads={ads} videoTitle={videoTitle} />

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

                    <div>
                        <Progressbar
                            duration={duration}
                            currentTime={currentTime}
                            upcomingUpAd={upComingAds}
                            setHoverPercent={setHoverPercent}
                            handleMouseMove={handleMouseMove}
                            videoTitle={videoTitle}
                        />
                    </div>

                    {/* Comments */}
                    <div className="bg-gray-50 border p-3 rounded-md border-gray-200 h-[16rem]">
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