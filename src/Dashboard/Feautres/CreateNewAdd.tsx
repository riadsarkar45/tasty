import { useEffect, useRef, useState } from 'react';
import Video from '../Components/Video';
import AdForm from '../Components/AdForm';
import AddPreview from '../Components/AddPreview';
import useAxiosPublic from '../../hooks/AxiosPublic';
import { Link, useParams } from 'react-router-dom';
import Loading from '../Components/Loading';
import { useYouTubePlayer } from '../../hooks/useYoutubePlayer';

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





// === Component ===
const CreateNewAdd = () => {
  const [hoverTime, setHoverTime] = useState<number | null>(null);
  const [formType, setFormType] = useState<'image' | 'poll' | 'onlyText' | null>(null);
  const [inComingAdType, setIncomingAdType] = useState({});
  const [video, setVideo] = useState([]);
  const [incomingAd, setIncomingAd] = useState([])
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // this state is used to insert all data to database 

  const [finalAds, setFinalAds] = useState([])

  // checking new style of code to run ads

  const [upComingUpAd, setUpcomingUpAd] = useState([]);

  // const [adPreview, setAdPreview] = useState({});

  const progressBarRef = useRef<HTMLDivElement>(null);
  const axiosPublic = useAxiosPublic();
  const { playerRef, duration, ads, currentTime, setAdPreview, onPlayerReady, onPlayerStateChange, setCurrentTime, } = useYouTubePlayer();

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };


  const { videoId } = useParams();
  // ✅ 1. Fetch video data — only when videoId changes
  useEffect(() => {
    if (!videoId) return;
    setIsLoading(true);

    axiosPublic.get(`/videos/${videoId}`)
      .then(res => {
        if (res?.data) {
          const videos = Array.isArray(res.data) ? res.data : [res.data];
          setVideo(videos);
          const adItems = videos?.flatMap((items:any) => items.items || [])
          setAdPreview(adItems)
          setIncomingAd(adItems)

        }
        setIsLoading(false);
      })
      .catch(err => {
        console.error("Error fetching video:", err);
        setIsLoading(false);
      });
  }, [axiosPublic, videoId, setAdPreview]);









  const hidePollAd = (type) => {
    setFormType(type)
  }

  const handleSetPolls = () => {
    console.log(finalAds, 'finalAds in CreateNewAdd');
    axiosPublic.post('/newpoll', finalAds)
      .then((res) => {
        console.log(res?.data, 'Polls created successfully');
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
                progressBarRef={progressBarRef}
                setHoverTime={setHoverTime}
                formatTime={formatTime}
                upcomingUpAd={upComingUpAd}
                playerRef={playerRef}
                setCurrentTime={setCurrentTime}
                incomingAd={incomingAd}
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
            adPreview={ads}
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