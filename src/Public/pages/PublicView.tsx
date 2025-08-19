import { Link } from "react-router-dom";
import CategoryItems from "../../components/CategoryItems";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/AxiosPublic";

type ImageAd = {
  id: string;
  imageUrl: string;
  startTime: number;
  duration: number;
};

const PublicView = () => {
  const [videos, setVideos] = useState<ImageAd[]>([]);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    axiosPublic.get('/api/v1/public/videos')
      .then((res) => {
        if (res.data) {
          setVideos(res?.data?.videos);
          // const allItems = res.data.flatMap((video: any) => video.items || []);
          // setUpcomingUpAd(allItems);
          // const ads = res?.data.flatMap((video: any) => video.items || []);

        }
        console.log(res?.data?.videos);
      }).catch((err) => {
        console.error("Error fetching videos:", err);
      })
  }, [axiosPublic])
  // const imageAds: ImageAd[] = [
  //   {
  //     id: 'ad1',
  //     imageUrl: 'https://i.ibb.co/8gFhDJ2F/Screenshot-2024-12-08-145159.png',
  //     startTime: 1,
  //     duration: 15,
  //   },
  //   {
  //     id: 'ad2',
  //     imageUrl: 'https://i.ibb.co/8DYv007W/Screenshot-2024-12-08-155816.png',
  //     startTime: 25,
  //     duration: 4,
  //   },
  //   {
  //     id: 'ad3',
  //     imageUrl: 'https://i.ibb.co/nsmjcHX2/Screenshot-2024-12-05-163143.png',
  //     startTime: 45,
  //     duration: 6,
  //   },
  //   {
  //     id: 'ad4', // 👈 Fixed duplicate ID
  //     imageUrl: 'https://i.ibb.co/nsmjcHX2/Screenshot-2024-12-05-163143.png',
  //     startTime: 60,
  //     duration: 6,
  //   },
  // ];

  const videoId = "RLzC55ai0eo";
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;

  return (
    <div className="w-[75rem] m-auto p-3">
      {/* Single Thumbnail Link (Left Side) */}
      <div className="flex">
        <div className="bg-white p-1">
          <Link to="/details">
            <img
              className="w-[55rem] cursor-pointer hover:opacity-90"
              src={thumbnailUrl}
              alt="YouTube video thumbnail"
            />
          </Link>
        </div>

        {/* Grid of Clickable Thumbnails (Same Behavior) */}
        <div className="grid grid-cols-2 gap-2 bg-white p-1">
          {videos.map((ad) => (
            <Link
              key={ad.id}
              to="/watch"
              className="block cursor-pointer overflow-hidden rounded bg-gray-100"
            >
              {/* Static Thumbnail Instead of Embedded Player */}
              <img
                src={thumbnailUrl}
                alt="Video preview"
                className="w-full h-auto object-cover"
                style={{ height: '175px', width: '255.5px' }}
              />

            </Link>
          ))}
        </div>
      </div>

      {/* Other content */}
      <CategoryItems videos={videos} />
    </div>
  );
};

export default PublicView;