// Details.tsx
import { useEffect, useRef, useState } from "react";
import type { YouTubeProps } from "react-youtube";
import YouTube from "react-youtube";
import AddNewComments from "../../features/AddNewComments";
import useAxiosPublic from "../../hooks/AxiosPublic";
import { useParams } from "react-router-dom";
import AddPreview from "../AddPreview";
import Progressbar from "../../components/Progressbar";
import { handleMouseMove, handleProgressBarClick } from "../../Dashboard/shared/handleMouseMove";

// Define Ad Types
type UpcomingAd = {
  id: string;
  startTime: number;
  duration: number;
  type: "poll" | "onlyText" | "image";
  imageUrl?: string;
  question?: string;
  options?: { options: string }[];
  textTitle?: string;
  textDesc?: string;
};

const formatTime = (seconds: number): string => {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
};

const Details = () => {
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [ads, setAds] = useState<UpcomingAd | null>(null);
  const [upComingAds, setUpComingAds] = useState<UpcomingAd[]>([]);
  const [videoTitle, setVideoTitle] = useState<string>("");
  const [video, setVideo] = useState<any[]>([]);

  // ✅ Correct ref for YouTube player
  const playerRef = useRef<any>(null);
  const intervalRef = useRef<number | null>(null);
  const axiosPublic = useAxiosPublic();
  const { videoId } = useParams();

  useEffect(() => {
    axiosPublic
      .get(`/videos/${videoId}`)
      .then((res) => {
        if (res?.data) {
          setVideo(res.data);
          const extractAds = res.data.flatMap((video: any) => video.items || []);
          setUpComingAds(extractAds);
        }
      })
      .catch((err) => console.log(err));
  }, [axiosPublic, videoId]);

  // When YouTube player is ready
  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    playerRef.current = event.target;
    setVideoTitle(event.target.getVideoData().title); // ✅ Get title from API
    const dur = event.target.getDuration();
    setDuration(dur);
  };

  // On play/pause state change
  const onPlayerStateChange: YouTubeProps["onStateChange"] = (event) => {
    const player = event.target;

    if (event.data === 1) {
      // Playing → start time checker
      if (intervalRef.current) clearInterval(intervalRef.current);

      intervalRef.current = window.setInterval(() => {
        const time = player.getCurrentTime();
        setCurrentTime(time);

        // Check if any ad should be shown
        const showingAd = upComingAds.find((ad) => {
          const start = Number(ad.startTime);
          const duration = Number(ad.duration);
          return time >= start && time < start + duration;
        });

        setAds(showingAd);
      }, 100);
    } else {
      // Not playing → stop interval
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
  };

  // Cleanup interval on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const opts = {
    height: "100%",
    width: "100%",
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
          {/* YouTube Video */}
          <div className="h-[25rem] bg-black rounded-lg overflow-hidden relative">
            {video.map((video, i) => (
              <YouTube
                key={i}
                videoId={video.videoId}
                opts={opts}
                onReady={onPlayerReady}
                onStateChange={onPlayerStateChange}
                className="w-full h-full"
              />
            ))}
          </div>

          {/* Time Display */}
          <div className="mb-10 items-center mt-2 text-xs text-gray-700 font-mono">
            <span>{formatTime(currentTime)}</span>
            <span>/</span>
            <span>{formatTime(duration)}</span>
          </div>

          <AddNewComments />
        </div>

        {/* RIGHT: Sidebar */}
        <div className="w-[45rem] flex flex-col gap-4">
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
              <span className="flex items-center border border-gray-500 p-2 rounded-lg">12sec</span>
            </div>
          </div>

          {/* Progress Bar */}
          <div>
            <Progressbar
              duration={duration}
              currentTime={currentTime}
              upcomingUpAd={upComingAds}
              videoTitle={videoTitle}
              playerRef={playerRef}
              setCurrentTime={setCurrentTime} // ✅ Required
            />
          </div>

          {/* Comments */}
          <div className="bg-gray-50 border p-3 rounded-md border-gray-200 h-[16rem]">
            <div className="mt-4 border border-r-1 w-full flex items-center justify-center">
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