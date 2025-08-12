import { useEffect, useRef, useState } from 'react';
import { type YouTubeProps } from 'react-youtube';
import Video from '../Components/Video';
import AdForm from '../Components/AdForm';
import AddPreview from '../Components/AddPreview';

// === Types ===
type ImageAd = {
  id: string;
  imageUrl: string;
  startTime: number;
  duration: number;
};

type Poll = {
  id: string;
  question: string;
  options: string[];
  startTime: number;
  duration: number;
};

// === Component ===
const CreateNewAdd = () => {
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [activeAd, setActiveAd] = useState<ImageAd | null>(null);
  const [hoverTime, setHoverTime] = useState<number | null>(null);
  const [hoverPercent, setHoverPercent] = useState<number>(0);
  const [seekTime, setSeekTime] = useState<number>(0);
  const [imageAds, setImageAds] = useState<ImageAd[]>([]);
  const [createdPolls, setCreatedPolls] = useState<Poll[]>([]);
  const [visiblePoll, setVisiblePoll] = useState<Poll | null>(null); // Renamed: was setPollVisible
  const [isVisible, setIsVisible] = useState(null);
  const [onlyTexts, setOnlyTexts] = useState([])
  const [activeOnlyTextAd, setActiveOnlyTextAd] = useState([])
  const [incomingAdType, setIncomingAdType] = useState('')

  const playerRef = useRef<any>(null); // Will hold YouTube player instance
  const intervalRef = useRef<number | null>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    playerRef.current = event.target;
    const dur = event.target.getDuration();
    if (dur && isFinite(dur)) {
      setDuration(dur);
    }
  };

  const onPlayerStateChange: YouTubeProps['onStateChange'] = (event) => {
    const player = event.target;

    if (event.data === 1) {
      if (intervalRef.current) clearInterval(intervalRef.current);

      intervalRef.current = window.setInterval(() => {
        const time = player.getCurrentTime();
        setCurrentTime(time);

        const showingAd = imageAds.find((ad) => {
          return time >= ad.startTime && time < ad.startTime + ad.duration;
        });

        const showingPoll = createdPolls.find((poll) => {
          return time >= poll.startTime && time < poll.startTime + poll.duration;
        });

        const onlyTextBasedAd = onlyTexts?.find((txt) => {
          return time >= txt.startTime && time < txt.startTime + txt.duration;
        })

        const onlyImageAds = imageAds?.find((ad) => {
          return ad.startTime - time > 0 && ad.startTime - time <= 7;
        });

        const onlyPolls = createdPolls?.find((poll) => {
          return poll.startTime - time > 0 && poll.startTime - time <= 7;
        })

        const onlyTextBased = onlyTexts?.find((txt) => {
          return txt.startTime - time > 0 && txt.startTime - time <= 7;
        })

        // Set incomingAdType only if something is upcoming
        if (onlyImageAds) {
          setIncomingAdType('ad');
        } else if (onlyPolls) {
          setIncomingAdType('poll');
        } else if (onlyTextBased) {
          setIncomingAdType('onlyText');
        } else {
          setIncomingAdType(null); // 🔴 Reset when nothing is upcoming
        }





        setActiveOnlyTextAd(onlyTextBasedAd)
        setActiveAd(showingAd || null);
        setVisiblePoll(showingPoll || null);
      }, 100);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const bar = progressBarRef.current;
    if (!bar) return;

    const rect = bar.getBoundingClientRect();
    const pos = e.clientX - rect.left;
    const percent = Math.max(0, Math.min(1, pos / rect.width));
    const time = percent * duration;

    setHoverPercent(percent * 100);
    setHoverTime(time);
  };

  const handleProgressBarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const bar = progressBarRef.current;
    if (!bar || !playerRef.current) return;

    const rect = bar.getBoundingClientRect();
    const pos = e.clientX - rect.left;
    const percent = Math.max(0, Math.min(1, pos / rect.width));
    const seekTime = percent * duration;

    playerRef.current.seekTo(seekTime);
    playerRef.current.pauseVideo();
    setCurrentTime(seekTime);
    setSeekTime(seekTime);
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const hidePollAd = (type) => {
    setIsVisible(type)
  }

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
    <div className="p-4 bg-gray-50 min-h-screen">
      <div className="flex gap-4 justify-between">
        {/* Video & Progress */}
        <Video
          videoId="CScddWNqwOI"
          opts={opts}
          onPlayerReady={onPlayerReady}
          onPlayerStateChange={onPlayerStateChange}
          currentTime={currentTime}
          duration={duration}
          imageAds={imageAds}
          createdPolls={createdPolls}
          hoverTime={hoverTime}
          hoverPercent={hoverPercent}
          progressBarRef={progressBarRef}
          handleMouseMove={handleMouseMove}
          setHoverTime={setHoverTime}
          handleProgressBarClick={handleProgressBarClick}
          formatTime={formatTime}
          onlyTexts={onlyTexts}
        />

        {/* Preview Pane */}
        <div>
          <AddPreview
            activeAd={activeAd}
            seekTime={seekTime}
            visiblePoll={visiblePoll}
            hidePollAd={hidePollAd}
            setIsVisible={setIsVisible}
            isVisible={isVisible}
            activeOnlyTextAd={activeOnlyTextAd}
            incomingAdType={incomingAdType}
          />

          <div className="mt-2">
            <div className="w-[24rem] bg-white p-4 rounded-lg shadow">
              <AdForm
                formatTime={formatTime}
                setImageAds={setImageAds}
                currentTime={currentTime}
                setCreatedPolls={setCreatedPolls}
                isVisible={isVisible}
                setOnlyText={setOnlyTexts}
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CreateNewAdd;