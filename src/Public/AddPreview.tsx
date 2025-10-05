import { useState, useEffect, useRef } from "react";
import useAxiosPublic from "../hooks/AxiosPublic";
import toast from "react-hot-toast";
import Draggable from "react-draggable";
import Notes from "../components/Notes";

type PollOption = {
  id: number;
  options: string;
  responses?: { selectedOption: string; submittedBy: string }[];
};

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
  notes: object;
};

const AddPreview = ({ ads, videoTitle, notes }: AddPreviewProps) => {
  const [result, setResult] = useState<string | null>(null);
  const [isLarge, setIsLarge] = useState(false);
  const axiosPublic = useAxiosPublic();
  const nodeRef = useRef<HTMLDivElement>(null); // 👈 FIX: attach nodeRef
  useEffect(() => {
    const checkScreen = () => setIsLarge(window.innerWidth >= 1024);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const handlePollSubmission = (
    option: string,
    submittedBy: string,
    pollOptionId: number
  ) => {
    const data = {
      submittedBy,
      selectedOption: option,
      pollOptionId,
      pollId: ads?.id ?? "",
    };

    axiosPublic
      .post("/poll-submission", data)
      .then(() => {
        toast.success("Response stored");
        if (option) {
          setResult(option);
        }
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div>
      <div className="mb-2">
        {
          notes && typeof notes === "object" && Object?.keys(notes).length > 0 && (
            <Notes notes={notes} />
          )
        }
      </div>
      <Draggable disabled={isLarge} nodeRef={nodeRef}>

        <div
          ref={nodeRef} // 👈 IMPORTANT
          className={`
          ${isLarge
              ? "static w-full h-[23rem]"
              : "fixed bottom-4 right-4 w-[20rem] h-[10rem] z-50"}
          bg-gray-50 rounded-md shadow-sm border border-gray-200
          flex flex-col
        `}
        >
          {!isLarge && (
            <div className="w-full cursor-move text-center text-xs text-gray-400 py-1 border-b">
              ⠿ Drag me
            </div>
          )}

          {isLarge && (
            <div className="w-full bg-white p-2 mb-2 border-b shadow-sm rounded-md">
              {videoTitle || "Looking for video title..."}
            </div>
          )}

          <div className="flex-1 flex items-center justify-center">
            {ads ? (
              ads.type === "image" ? (
                <img
                  src={ads.imageUrl || ""}
                  alt="Active Ad"
                  className="lg:h-[39rem] w-full"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.opacity = "0.5";
                  }}
                />
              ) : ads.type === "poll" &&
                ads.question &&
                Array.isArray(ads.options) &&
                ads.options.length > 0 ? (
                <div className="text-center gap-3 px-2 flex flex-col justify-center">
                  <h3 className="font-bold">{ads.question}</h3>
                  <ul className="space-y-1 text-sm">
                    {ads.options.map((opt) => {
                      const voteCount =
                        opt.responses?.filter(
                          (res) => res.selectedOption === opt.options
                        ).length || 0;

                      return (
                        <li
                          key={opt.id}
                          onClick={() =>
                            handlePollSubmission(opt.options, "riadsarkar", opt.id)
                          }
                          className="p-1 bg-blue-100 w-[10rem] mx-auto rounded flex justify-between cursor-pointer hover:bg-blue-200"
                        >
                          <span>{opt.options}</span>
                          {result && <span className="font-bold">{voteCount}</span>}
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
      </Draggable>

    </div>
  );
};

export default AddPreview;
