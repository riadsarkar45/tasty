import { useEffect, useRef, useState } from 'react';
import { type YouTubeProps } from 'react-youtube';
import Video from '../Components/Video';
import AdForm from '../Components/AdForm';
import AddPreview from '../Components/AddPreview';
import useAxiosPublic from '../../hooks/AxiosPublic';
import { Link, useParams } from 'react-router-dom';
import Loading from '../Components/Loading';

interface VideoItem {
  id: number;
  createdBy: string;
  startTime: string;
  type: string;
  options?: any[];
  // add other fields you need
}

interface Video {
  id: number;
  videoId: string;
  items: VideoItem[];
}



// type showingAdType = {
//   adType: 'image' | 'poll' | 'onlyText';
//   startTime: number;
//   duration: number;
// };

// type Poll = {
//   id: string;
//   question: string;
//   options: string[];
//   startTime: number;
//   duration: number;
// };

// === Component ===
const CreateNewAdd = () => {
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [hoverTime, setHoverTime] = useState<number | null>(null);
  const [hoverPercent, setHoverPercent] = useState<number>(0);
  const [formType, setFormType] = useState<'image' | 'poll' | 'onlyText' | null>(null);
  const [inComingAdType, setIncomingAdType] = useState({});
  const [video, setVideo] = useState([]);

  const [isLoading, setIsLoading] = useState<boolean>(true);

  // this state is used to insert all data to database 

  const [finalAds, setFinalAds] = useState([])

  // checking new style of code to run ads

  const [upComingUpAd, setUpcomingUpAd] = useState([]);

  const [adPreview, setAdPreview] = useState({});

  const playerRef = useRef(null); // Will hold YouTube player instance
  const intervalRef = useRef<number | null>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const axiosPublic = useAxiosPublic();


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
  const { videoId } = useParams();

  useEffect(() => {
    axiosPublic.get(`/videos/${videoId}`)
      .then(res => {
        if (res?.data) {
          const allItems = res.data.flatMap((video: any) => video.items || []);
          setUpcomingUpAd(allItems);
          setVideo(res.data);
          setIsLoading(false);
        }
      })
      .catch(err => console.error(err));
  }, [axiosPublic, videoId]);
  console.log(video);

  // console.log(adPreview, 'adPreview in CreateNewAdd');

  const onPlayerStateChange: YouTubeProps['onStateChange'] = (event) => {
    const player = event.target;

    if (event.data === 1) {
      if (intervalRef.current) clearInterval(intervalRef.current);

      intervalRef.current = window.setInterval(() => {
        const time = player.getCurrentTime();
        setCurrentTime(time);


        const gettingAdPreview = upComingUpAd?.find((ad) => {
          const start = Number(ad.startTime);
          const duration = Number(ad.duration);

          if (isNaN(start) || isNaN(duration)) {
            console.warn("Invalid ad time or duration:", ad);
            return false;
          }

          return time >= start && time < start + duration;
        });

        setAdPreview(gettingAdPreview);

        const incomingAd = upComingUpAd?.find((ad) => {
          return Number(ad.startTime) - time > 0 && Number(ad.startTime) - time <= 7;
        });


        setIncomingAdType(incomingAd);
        // console.log(incomingAd, 'incomingAd in CreateNewAdd');


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
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const hidePollAd = (type) => {
    setFormType(type)
  }

  const handleSetPolls = () => {
    console.log(finalAds, 'finalAds in CreateNewAdd');
    axiosPublic.post('/newpoll', finalAds)
      .then((res) => {
        console.log(res?.data, 'Polls created successfully');
        // // Optionally, you can reset the finalAds state or handle success feedback
        // setFinalAds([]);
      })
      .catch((error) => {
        console.error('Error creating polls:', error);
      });
  }

  if (isLoading) {
    return (
      <Loading isLoading={isLoading} />
    )
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
      <div className="flex gap-3 justify-between">
        {/* Video & Progress */}

        {
          videoId ? (
            video?.map((vid, i) =>
              <Video
                key={vid.id - i}
                videoId={vid.videoId}
                opts={opts}
                onPlayerReady={onPlayerReady}
                onPlayerStateChange={onPlayerStateChange}
                currentTime={currentTime}
                duration={duration}
                hoverTime={hoverTime}
                hoverPercent={hoverPercent}
                progressBarRef={progressBarRef}
                handleMouseMove={handleMouseMove}
                setHoverTime={setHoverTime}
                handleProgressBarClick={handleProgressBarClick}
                formatTime={formatTime}
                upcomingUpAd={upComingUpAd}
              />
            )
          ) : <div className='bg-red-500 w-full h-10 gap-3 border border-red-800 border-opacity-40 p-2 flex items-center rounded-md bg-opacity-40 text-red-800'>
            <span>⚠️</span>
            <h2>Please select a video or upload new video <Link className='underline' to={'/dashboard/AddNewVideo'}>Add New Video</Link> or <Link className='underline' to={'/dashboard/videos'}>Videos</Link></h2>
          </div>
        }

        {/* Preview Pane */}
        <div>
          <AddPreview
            hidePollAd={hidePollAd}
            formType={formType}
            adPreview={adPreview}
            currentTime={currentTime}
            inComingAdType={inComingAdType}
            formatTime={formatTime}
            handleSetPolls={handleSetPolls}

          />

          <div className="mt-2">
            <div className=" bg-white p-4 rounded-lg shadow">
              <AdForm
                formatTime={formatTime}
                currentTime={currentTime}
                setUpcomingUpAd={setUpcomingUpAd}
                formType={formType}
                upComingAd={upComingUpAd}
                videoId="CScddWNqwOI"
                setFinalAds={setFinalAds}
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CreateNewAdd;