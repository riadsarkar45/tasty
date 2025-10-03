// Details.tsx
import { useEffect, useRef, useState } from "react";
import type { YouTubeProps } from "react-youtube";
import YouTube from "react-youtube";
import AddNewComments from "../../features/AddNewComments";
import useAxiosPublic from "../../hooks/AxiosPublic";
import { useParams } from "react-router-dom";
import AddPreview from "../AddPreview";
import Progressbar from "../../components/Progressbar";
import toast from "react-hot-toast";
import useAxiosPrivate from "../../hooks/AxiosPrivate";

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
  const [getNotes, setGetNotes] = useState([]);
  const [showNote, setShowNote] = useState<object>({});
  const playerRef = useRef<any>(null);
  const intervalRef = useRef<number | null>(null);
  const [notes, setNotes] = useState("");
  const axiosPublic = useAxiosPublic();
  const axiosPrivate = useAxiosPrivate();
  const { videoId } = useParams();

  useEffect(() => {
    axiosPublic
      .get(`/videos/${videoId}`)
      .then((res) => {
        if (res?.data) {
          setVideo(res.data);
          const extractAds = res.data.flatMap((video: any) => video.items || []);
          setUpComingAds(extractAds);
          console.log(res.data);
        }

      })
      .catch((err) => console.log(err));

    axiosPublic.get(`/get-notes/${videoId}`)
      .then((res) => {
        setGetNotes(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, [axiosPublic, videoId]);

  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    playerRef.current = event.target;
    console.log(playerRef.current);
    setVideoTitle(event.target.getVideoData().title); // ✅ Get title from API
    const dur = event.target.getDuration();
    setDuration(dur);
  };

  const onPlayerStateChange: YouTubeProps["onStateChange"] = (event) => {
    const player = event.target;
    console.log('playing');
    if (event.data === 1) {
      if (intervalRef.current) clearInterval(intervalRef.current);

      intervalRef.current = window.setInterval(() => {
        const time = player.getCurrentTime();
        setCurrentTime(time);
        console.log(getNotes, 'line 84');
        const showingAd = upComingAds.find((ad) => {
          const start = Number(ad.startTime);
          const duration = Number(ad.duration);
          return time >= start && time < start + duration;
        });

        const currentNote = getNotes.find((note: any) => {
          const start = Number(note.startTime);
          const duration = Number(note.duration);
          const end = start + duration;

          // Check if current time is within note's active duration
          return time >= start && time < end;
        });

        setShowNote(currentNote);
        // if {
        //   console.log("No note currently active");
        // }

        setAds(showingAd);
      }, 100);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
  };

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

  const takeNotes = async () => {
    const wordCount = notes.split(" ").length;
    const readingSpeed = 150;
    const duration = (wordCount / readingSpeed) * 60;
    const dataToSend = {
      videoId: videoId,
      startTime: currentTime,
      duration: duration,
      noteText: notes,
      userId: "645+432"
    };

    console.log(dataToSend);

    try {
      const res = await axiosPublic.post('/take-notes', dataToSend);
      console.log(res.data);
      toast.success("Notes saved successfully");
    } catch (error) {
      console.error(error);
      toast.error("Failed to save notes");
    }


  };

  const handlePostInteract = (videoId: string, type: string) => {
    if (!videoId) return toast.error('Something went wrong.');

    axiosPrivate.post(`/post-interact`, { type, videoId })
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      })

  }

  const videoIds = "RLzC55ai0eo";
  const thumbnailUrl = `https://img.youtube.com/vi/${videoIds}/mqdefault.jpg`;

  return (
    <div className="w-full lg:w-[90%] md:w-[75rem] m-auto p-3">
      <div className="lg:flex md:flex justify-between m-auto gap-4">
        <div className="w-full">
          {/* YouTube Video */}
          <div className="h-[28rem] lg:w-[40rem] w-full bg-black rounded-lg overflow-hidden relative">
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
          <div className="mb-4 items-center mt-2 text-xs text-gray-700 font-mono">
            <span>{formatTime(currentTime)}</span>
            <span>/</span>
            <span>{formatTime(duration)}</span>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center justify-between border w-[9rem] p-4 rounded-md">
              <button onClick={() => handlePostInteract(videoId, 'like')}>Like</button>
              |
              <button>Dislike</button>
            </div>
            <div className="flex">
              <div className="flex gap-2 border p-2 rounded-l-md">
                <img className="w-[3rem] h-[3rem] rounded-[10rem]" src={thumbnailUrl} alt="channel photo" />
                <div className="grid grid-cols-1">
                  <button>DIAMON RACER</button>
                  <small>2.2k followers</small>
                </div>
              </div>
              <button className="border-r border-t border-b p-2 rounded-r-lg">
                Follow
              </button>
            </div>
          </div>
          <AddNewComments />
        </div>

        {/* RIGHT: Sidebar  add preview*/}
        <div className="w-full lg:w-[80rem] flex flex-col gap-4">
          <AddPreview ads={ads} videoTitle={videoTitle} notes={showNote} />

          {/* Stats */}
          <div className="flex">
            <input onChange={(e) => setNotes(e.target.value)} value={notes} className="w-full outline-none p-2 border-b rounded-l-md" type="text" placeholder="Takes Notes" />
            {/* <input className="w-full outline-none p-2 border-b rounded" type="text" placeholder="Takes Notes" /> */}
            <button onClick={takeNotes} className="border bg-gray-500 bg-opacity-25 rounded-r-md text-gray-500 w-[4rem]">Save</button>
          </div>

          {/* Progress Bar */}
          <div>
            <Progressbar
              duration={duration}
              currentTime={currentTime}
              upcomingUpAd={upComingAds}
              videoTitle={videoTitle}
              playerRef={playerRef}
              setCurrentTime={setCurrentTime}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;