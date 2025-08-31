// src/Dashboard/shared/handleMouseMove.ts
import { type RefObject, type MouseEvent } from "react";

export const handleMouseMove = (
  e: MouseEvent<HTMLDivElement>,
  duration: number,
  setHoverTime: (t: number | null) => void,
  setHoverPercent: (p: number) => void,
  setCurrentTime: (p: number) => void,
  progressBarRef: RefObject<HTMLDivElement>
) => {
  const bar = progressBarRef.current;
  if (!bar) return;

  const rect = bar.getBoundingClientRect();
  const percent = (e.clientX - rect.left) / rect.width;
  const time = percent * duration;

  setHoverTime(time);
  setHoverPercent(percent * 100);
  setCurrentTime(time)
};

export const handleProgressBarClick = (
  e: MouseEvent<HTMLDivElement>,
  duration: number,
  playerRef: RefObject<any>, // YouTube player
  setCurrentTime: (t: number) => void
) => {
  const bar = e.currentTarget;
  const rect = bar.getBoundingClientRect();
  const percent = (e.clientX - rect.left) / rect.width;
  const newTime = percent * duration;

  // ✅ Use YouTube API to seek
  if (playerRef.current) {
    playerRef.current.seekTo(newTime, true); // `true` = smooth seek
  }

  // ✅ Update React state
  setCurrentTime(newTime);
};