// hooks/useYouTubePlayer.ts
import { useState, useRef, useCallback, useEffect } from 'react';
import type { YouTubeProps } from 'react-youtube';

export interface UseYouTubePlayerResult {
  playerRef: React.RefObject<any>;
  duration: number;
  currentTime: number;
  setAdPreview: any;
  onPlayerReady: YouTubeProps['onReady'];
  onPlayerStateChange: YouTubeProps['onStateChange'];
  setCurrentTime: (time: number) => void;
  setDuration: (duration: number) => void;
  adPreview: any;
}

export const useYouTubePlayer = (): UseYouTubePlayerResult => {
  const playerRef = useRef<any>(null);
  const intervalRef = useRef<number | null>(null);

  const [duration, setDuration] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [ads, setAds] = useState<null>(null)
  const [adPreview, setAdPreview] = useState([])

  // const onPlayerReady: YouTubeProps['onReady'] = useCallback((event) => {
  //   playerRef.current = event.target;

  //   const trySetDuration = () => {
  //     const dur = event.target.getDuration();
  //     if (dur > 0 && isFinite(dur)) {
  //       setDuration(dur);
  //     } else {
  //       setTimeout(trySetDuration, 100);
  //     }
  //   };

  //   trySetDuration();
  // }, []);

  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    playerRef.current = event.target;
    const dur = event.target.getDuration();
    setDuration(dur);
  };

  const onPlayerStateChange: YouTubeProps['onStateChange'] = useCallback((event) => {
    const player = event.target;

    if (event.data === 1) {
      // Playing → start time update
      if (intervalRef.current) clearInterval(intervalRef.current);

      intervalRef.current = window.setInterval(() => {
        const time = player.getCurrentTime();
        setCurrentTime(time);
        const gettingAdPreview = adPreview?.find((ad) => {
          const start = Number(ad.startTime);
          const duration = Number(ad.duration);

          if (isNaN(start) || isNaN(duration)) {
            console.warn("Invalid ad time or duration:", ad);
            return false;
          }

          return time >= start && time < start + duration;
        });
        if (gettingAdPreview) {
          setAds(gettingAdPreview);

        }

      }, 100);
    } else {
      // Not playing → stop interval
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }
  }, [adPreview]);

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return {
    playerRef,
    duration,
    currentTime,
    onPlayerReady,
    onPlayerStateChange,
    setCurrentTime,
    setDuration,
    setAdPreview,
    adPreview,
    ads
  };
};