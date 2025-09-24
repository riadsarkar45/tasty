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

        }
        console.log(res?.data?.videos);
      }).catch((err) => {
        console.error("Error fetching videos:", err);
      })
  }, [axiosPublic])


  const videoId = "RLzC55ai0eo";
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;

  return (
    <div className="lg:w-[75rem] w-full m-auto p-3">
      {/* Single Thumbnail Link (Left Side) */}
      <div className="lg:flex md:flex">
        <div className="bg-white p-1">
          <Link to="/watch">
            <img
              className=" w-full lg:w-[55rem] cursor-pointer hover:opacity-90"
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