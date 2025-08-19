import React from "react";

export const handleMouseMove = (
  e: React.MouseEvent<HTMLDivElement>,
  duration: number,
  setHoverPercent: (value: number) => void,
  setHoverTime: (value: number) => void,
  progressBarRef: React.RefObject<HTMLDivElement>
) => {
  const bar = progressBarRef.current;
  if (!bar) return;

  const rect = bar.getBoundingClientRect();
  const pos = e.clientX - rect.left;
  const percent = Math.max(0, Math.min(1, pos / rect.width));
  const time = percent * duration;

  setHoverPercent(percent * 100);
  setHoverTime(time);
};


export const handleProgressBarClick = (
  e: React.MouseEvent<HTMLDivElement>,
  duration: number,
  progressBarRef: React.RefObject<HTMLDivElement>,
  playerRef: React.RefObject<any>,
  setCurrentTime: (time: number) => void
) => {
  const bar = progressBarRef.current;
  const player = playerRef.current;
  if (!bar || !player) return;

  const rect = bar.getBoundingClientRect();
  const pos = e.clientX - rect.left;
  const percent = Math.max(0, Math.min(1, pos / rect.width));
  const seekTime = percent * duration;

  player.seekTo(seekTime);
  player.pauseVideo();
  setCurrentTime(seekTime);
};

