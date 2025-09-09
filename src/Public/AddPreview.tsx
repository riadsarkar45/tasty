import { useState } from "react";
import useAxiosPublic from "../hooks/AxiosPublic";
import toast from "react-hot-toast";

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
        options?: { options: string }[];
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

type PollOption = {
    options: string;
};

type option = {
    options: string
    submittedBy: string
    pollOptionId: number
}

const AddPreview = ({ ads, videoTitle }: AddPreviewProps) => {
    const [result, setResult] = useState<any>('')
    const axiosPublic = useAxiosPublic();
    const handlePollSubmission = (option: option, submittedBy: option, pollOptionId: option) => {
        const data = {
            submittedBy: submittedBy,
            selectedOption: option,
            pollOptionId: pollOptionId,
            pollId: pollOptionId,
        };
        axiosPublic.post('/poll-submission', data)
            .then((res) => {
                toast.success('Response stored');
                if (option) {
                    setResult(option);

                }
                console.log(res);
            })
            .catch((err) => console.log(err.message));

    }
    return (
        <div>
            {/* Video Title */}
            <div className="bg-white p-2 mb-2 border-b shadow-sm rounded-md">
                {videoTitle || "Looking for video title..."}
            </div>

            {/* Ad Preview Area */}
            <div className="bg-gray-50 rounded-md shadow-sm flex h-[16rem] border border-gray-200 items-center justify-center">
                {ads ? (
                    ads.type === "image" ? (
                        <img
                            src={ads.imageUrl || ""}
                            alt="Active Ad"
                            className="max-h-full max-w-full object-contain"
                            onError={(e) => {
                                console.error("Image failed to load:", ads.imageUrl);
                                (e.target as HTMLImageElement).style.opacity = "0.5";
                            }}
                        />
                    ) : ads.type === "poll" && ads.question && Array.isArray(ads.options) && ads.options.length > 0 ? (
                        <div className="text-center gap-6 px-2 flex flex-col justify-center">
                            <h3 className="font-bold">{ads.question}</h3>
                            <ul className="space-y-1 text-sm">
                                {ads.options.map((opt: PollOption, i: number) => {
                                    // count how many people voted this option
                                    const voteCount = opt.responses?.filter(
                                        (res) => res.selectedOption === opt.options
                                    ).length || 0;

                                    return (
                                        <li
                                            key={i}
                                            onClick={() =>
                                                handlePollSubmission(opt.options, 'riadsarkar', opt.id, 'static')
                                            }
                                            className="p-1 bg-blue-100 w-[10rem] rounded flex justify-between"
                                        >
                                            <span>{opt.options}</span>
                                            {
                                                result && (
                                                    <span className="font-bold">{voteCount}</span>
                                                )
                                            }
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
                        <span className="text-gray-500">Unsupported or incomplete ad type</span>
                    )
                ) : (
                    <span className="text-gray-400">Waiting for ad...</span>
                )}
            </div>
        </div>
    );
};

export default AddPreview;