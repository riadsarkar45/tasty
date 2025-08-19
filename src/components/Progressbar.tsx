import React, { useRef } from "react";
import { handleMouseMove, handleProgressBarClick } from "../Dashboard/shared/handleMouseMove";

interface UpcomingAd {
  id: number;
  startTime: number;
  duration: number;
  type: "poll" | "onlyText" | "image"; // restrict types for better safety
}

interface ProgressProps {
  duration: number;
  currentTime: number;
  upcomingUpAd: UpcomingAd[];
  videoTitle: string
  playerRef: React.RefObject<HTMLVideoElement>; // assuming it's a video/audio player
  setCurrentTime: (time: number) => void;
}

const Progressbar: React.FC<ProgressProps> = ({
  duration,
  currentTime,
  upcomingUpAd,
  playerRef,
  videoTitle,
  setCurrentTime,
}) => {
  const progressBarRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      
      <div className="bg-white p-3 rounded-md shadow mt-2">

        {duration > 0 ? (
          <div
            ref={progressBarRef}
            className="relative w-full max-w-xl bg-gray-300 rounded-full h-3 overflow-hidden cursor-pointer"
            onClick={(e) =>
              handleProgressBarClick(
                e,
                duration,
                progressBarRef,
                playerRef,
                setCurrentTime
              )
            }
          >
            {/* Blue Progress Fill */}
            <div
              className="absolute top-0 left-0 h-full bg-blue-500 bg-opacity-50 rounded"
              style={{
                width: `${(currentTime / duration) * 100}%`,
                zIndex: 2,
              }}
            />

            {/* Red Ad Markers */}
            {upcomingUpAd?.map((ad, i) => {
              const startPercent =
                (Number(ad.startTime) / Number(duration)) * 100;
              const widthPercent =
                (Number(ad.duration) / Number(duration)) * 100;
              return (
                <div
                  key={`${ad.id}-${i}`}
                  className={`absolute top-0 h-full 
                  ${ad.type === "poll" ? "bg-yellow-500" : ""} 
                  ${ad.type === "onlyText" ? "bg-red-500" : ""} 
                  ${ad.type === "image" ? "bg-red-900" : ""} 
                  opacity-70 pointer-events-none rounded`}
                  style={{
                    left: `${startPercent}%`,
                    width: `${widthPercent}%`,
                    zIndex: 1,
                  }}
                />
              );
            })}
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

export default Progressbar;
