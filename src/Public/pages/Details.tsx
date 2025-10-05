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
import useLoggedInUser from "../../hooks/GetUserRole";

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
  const [totalLikes, setTotalLikes] = useState()
  const { videoId } = useParams();

  const { user } = useLoggedInUser();

  useEffect(() => {
    axiosPublic
      .get(`/videos/${videoId}`)
      .then((res) => {
        if (res?.data) {
          setVideo(res.data);
          const extractAds = res.data.flatMap((video: any) => {
            setTotalLikes(video.likes);
            return video.items || [];
          });
          setUpComingAds(extractAds);
        }

      })
      .catch((err) => console.log(err));

    axiosPublic.get(`/get-notes/${videoId}`)
      .then((res) => {
        setGetNotes(res.data);
      })
      .catch((err) => console.log(err));
  }, [axiosPublic, videoId]);

  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    playerRef.current = event.target;
    setVideoTitle(event.target.getVideoData().title); // ✅ Get title from API
    const dur = event.target.getDuration();
    setDuration(dur);
  };

  const onPlayerStateChange: YouTubeProps["onStateChange"] = (event) => {
    const player = event.target;
    if (event.data === 1) {
      if (intervalRef.current) clearInterval(intervalRef.current);

      intervalRef.current = window.setInterval(() => {
        const time = player.getCurrentTime();
        setCurrentTime(time);
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

    try {
      await axiosPublic.post('/take-notes', dataToSend);
      toast.success("Notes saved successfully");
    } catch (error) {
      console.error(error);
      toast.error("Failed to save notes");
    }


  };

  const handlePostInteract = (videoId: string, type: string) => {
    if (!videoId) return toast.error('Something went wrong.');

    axiosPrivate.post(`/post-interact`, { type, videoId })
      .then(() => {
        toast.success("Thank for your feedback")
      })
      .catch((e) => {
        console.log(e);
      })

  }

  const isLiked = totalLikes?.some(like => like.userId === user.userId);
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;

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
              <button className="flex gap-2" onClick={() => handlePostInteract(videoId as string, 'like')}>

                <svg
                className="text-blue-500"
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill={isLiked ? 'blue': 'black'}
                >
                  <path d="M2 21h2V9H2v12zm20-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L13.17 2 7.59 7.59C7.22 7.95 7 8.45 7 9v9c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1z" />
                </svg>

                {totalLikes?.length}

              </button>
              |
              <button className="flex gap-2">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  fill="black"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 3h2v12H2V3zm20 11c0 1.1-.9 2-2 2h-6.31l.95 4.57.03.32c0 .41-.17.79-.44 1.06L13.17 22l-5.58-5.59C7.22 16.05 7 15.55 7 15V6c0-1.1.9-2 2-2h9c.83 0 1.54.5 1.84 1.22l3.02 7.05c.09.23.14.47.14.73v1z" />


                </svg>
                {`0`}
              </button>
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