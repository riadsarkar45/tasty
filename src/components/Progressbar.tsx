import React, { useRef, useState } from "react";
import { handleMouseMove, handleProgressBarClick } from "../Dashboard/shared/handleMouseMove";

interface UpcomingAd {
  id: number;
  startTime: number;
  duration: number;
  type: "poll" | "onlyText" | "image";
}

interface ProgressProps {
  duration: number;
  currentTime: number;
  upcomingUpAd: UpcomingAd[];
  videoTitle: string;
  playerRef: React.RefObject<HTMLVideoElement>;
  setCurrentTime: (time: number) => void;
}

const Progressbar: React.FC<ProgressProps> = ({
  duration,
  currentTime,
  upcomingUpAd,
  playerRef,
  setCurrentTime,
  
}) => {
  const progressBarRef = useRef<HTMLDivElement>(null);
  const [hoverTime, setHoverTime] = useState<number | null>(null);
  const [hoverPercent, setHoverPercent] = useState<number>(0); // in percentage (0-100)
  return (
    <div>
      <div className="bg-white p-3 rounded-md shadow mt-2">
        {duration > 0 ? (
          <div
            ref={progressBarRef}
            className="relative w-full max-w-xl bg-gray-300 rounded-full h-3 overflow-hidden cursor-pointer"
            onMouseMove={(e) =>
              handleMouseMove(e, duration, setHoverTime, setHoverPercent, setCurrentTime, progressBarRef)
            }
            onMouseLeave={() => setHoverTime(null)}
            onClick={(e) => handleProgressBarClick(e, duration, playerRef, setCurrentTime)}
          >
            {/* Progress Fill */}
            <div
              className="absolute top-0 left-0 h-full bg-blue-500 bg-opacity-50 rounded"
              style={{
                width: `${(currentTime / duration) * 100}%`,
                zIndex: 2,
              }}
            />

            {/* Ad Markers */}
            {upcomingUpAd?.map((ad, i) => {
              const startPercent = (ad.startTime / duration) * 100;
              const widthPercent = (ad.duration / duration) * 100;
              return (
                <div
                  key={i + 9}
                  className={`absolute top-0 h-full rounded pointer-events-none opacity-70 ${ad.type === "poll"
                      ? "bg-yellow-500"
                      : ad.type === "onlyText"
                        ? "bg-red-500"
                        : "bg-red-900"
                    }`}
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
                  className="absolute top-[-2.5rem] bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap transform -translate-x-1/2"
                  style={{
                    left: `${hoverPercent}%`,
                    zIndex: 5,
                  }}
                >
                  {Math.floor(hoverTime / 60)}:{String(Math.floor(hoverTime % 60)).padStart(2, "0")}
                </div>

                {/* Circle dot */}
                <div
                  className="absolute top-1/2 w-2 h-2 bg-white border-2 border-blue-400 rounded-full transform -translate-x-1/2 -translate-y-1/2"
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

export default Progressbar;