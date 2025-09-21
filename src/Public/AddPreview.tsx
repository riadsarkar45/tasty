import { useEffect, useState } from "react";
import useAxiosPublic from "../hooks/AxiosPublic";
import toast from "react-hot-toast";
import { YoutubeTranscript } from 'youtube-transcript';
import { useParams } from "react-router-dom";
// Unified ad types
type UpcomingAd =
  | {
    id: string;
    startTime: number;
    duration: number;
    type: "image";
    imageUrl?: string;
  }
  | {
    id: string;
    startTime: number;
    duration: number;
    type: "poll";
    question?: string;
    options?: PollOption[];
  }
  | {
    id: string;
    startTime: number;
    duration: number;
    type: "onlyText";
    textTitle?: string;
    textDesc?: string;
  };

type AddPreviewProps = {
  ads: UpcomingAd | null;
  videoTitle?: string;
};

// Poll option type
type PollOption = {
  id: number;
  options: string;
  responses?: { selectedOption: string; submittedBy: string }[];
};

const AddPreview = ({ ads, videoTitle }: AddPreviewProps) => {

  const [result, setResult] = useState<string | null>(null);
  const axiosPublic = useAxiosPublic();
  const { videoId } = useParams();
  // corrected parameters
  const handlePollSubmission = (
    option: string,
    submittedBy: string,
    pollOptionId: number
  ) => {
    const data = {
      submittedBy,
      selectedOption: option,
      pollOptionId,
      pollId: pollOptionId, // you may want a real pollId here
    };

    axiosPublic
      .post("/poll-submission", data)
      .then((res) => {
        toast.success("Response stored");
        if (option) {
          setResult(option);
        }
        console.log(res);
      })
      .catch((err) => console.log(err.message));
  };


  const fetchTranscript = async () => {
    try {
      console.log(videoId);
      const data = await YoutubeTranscript.fetchTranscript(videoId);
      console.log(data);
    } catch (err) {
      console.error("Error fetching transcript:", err);
      alert("Transcript not available for this video.");
    } finally {
      // setLoading(false);
    }
  };

  return (
    <div>
      {/* Video Title */}
      <div className="w-full bg-white p-2 mb-2 border-b shadow-sm rounded-md">
        {videoTitle || "Looking for video title..."}
      </div>
      <button onClick={() => fetchTranscript()}>Fetch Transcript</button>

      {/* Ad Preview Area */}
      <div className="bg-gray-50 rounded-md shadow-sm flex lg:h-[23rem] border w-full border-gray-200 items-center justify-center">
        {ads ? (
          ads.type === "image" ? (
            <img
              src={ads.imageUrl || ""}
              alt="Active Ad"
              className="h-full w-full"
              onError={(e) => {
                console.error("Image failed to load:", ads.imageUrl);
                (e.target as HTMLImageElement).style.opacity = "0.5";
              }}
            />
          ) : ads.type === "poll" &&
            ads.question &&
            Array.isArray(ads.options) &&
            ads.options.length > 0 ? (
            <div className="text-center gap-6 px-2 flex flex-col justify-center">
              <h3 className="font-bold">{ads.question}</h3>
              <ul className="space-y-1 text-sm">
                {ads.options.map((opt, i) => {
                  const voteCount =
                    opt.responses?.filter(
                      (res) => res.selectedOption === opt.options
                    ).length || 0;

                  return (
                    <li
                      key={i}
                      onClick={() =>
                        handlePollSubmission(opt.options, "riadsarkar", opt.id)
                      }
                      className="p-1 bg-blue-100 w-[10rem] rounded flex justify-between"
                    >
                      <span>{opt.options}</span>
                      {result && (
                        <span className="font-bold">{voteCount}</span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ) : ads.type === "onlyText" ? (
            <div className="text-center px-4">
              <h2 className="font-semibold">{ads.textTitle || "No title"}</h2>
              <p>{ads.textDesc || "No description"}</p>
            </div>
          ) : (
            <span className="text-gray-500">
              Unsupported or incomplete ad type
            </span>
          )
        ) : (
          <span className="text-gray-400">Waiting for ad...</span>
        )}
      </div>
    </div>
  );
};

export default AddPreview;
