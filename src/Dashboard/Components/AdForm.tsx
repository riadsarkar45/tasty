import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useAxiosPublic from '../../hooks/AxiosPublic';
import toast from 'react-hot-toast';

// Define types
interface Ad {
    id: string;
    imageUrl: string;
    startTime: number;
    duration: number;
    videoId: string
    type: 'image' | 'poll' | 'onlyText';
}

interface Poll {
    id: string;
    question: string;
    options: string[];
    startTime: Date;
}

type AdOrPoll = Ad | Poll;

interface AdFormProps {
    formatTime: (date: Date) => string;
    setImageAds: (prev: AdOrPoll[]) => void;
    currentTime: Date;
    isVisible: string;
    setCreatedPolls: (prev: AdOrPoll[]) => void;
    setOnlyText: (prev: AdOrPoll[]) => void;
}

const AdForm: React.FC<AdFormProps> = ({ formatTime, setUpcomingUpAd, formType, currentTime, setFinalAds }) => {


    // Ad Form State
    const [adDuration, setAdDuration] = useState<string>('');
    const [adImageUrl, setAdImageUrl] = useState<string>('');

    // add only text
    const [textTitle, setTextTitle] = useState<string>('');
    const [textDesc, setDesc] = useState<string>('');

    // Poll Form State
    const [pollQuestion, setPollQuestion] = useState<string>('');
    const [pollOptions, setPollOptions] = useState<string[]>(['', '']);

    // params getting videoId
    const { videoId } = useParams();
    const axiosPublic = useAxiosPublic();

    const [isLoading, setIsLoading] = useState<boolean>(false);

    // Add option
    const addOption = () => {
        setPollOptions([...pollOptions, '']);
    };

    // Remove option
    const removeOption = (index: number) => {
        if (pollOptions.length <= 2) return;
        setPollOptions(pollOptions.filter((_, i) => i !== index));
    };

    // Handle option change
    const handleOptionChange = (index: number, value: string) => {
        const newOptions = [...pollOptions];
        newOptions[index] = value;
        setPollOptions(newOptions);
    };



    // Handle Poll Submit
    const handlePollSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const questionTrimmed = pollQuestion.trim();
        if (!questionTrimmed) {
            alert('Please enter a question.');
            return;
        }

        const trimmedOptions = pollOptions
            .map(opt => opt.trim())
            .filter(opt => opt !== '');

        if (trimmedOptions.length < 2) {
            alert('Please provide at least two valid options.');
            return;
        }

        const crnTime = Number(currentTime);
        const dur = Number(adDuration);

        const pollData: Poll = {
            id: `poll-${Date.now()}`,
            question: questionTrimmed,
            options: trimmedOptions,
            startTime: crnTime,
            duration: dur,
            type: 'poll',
            videoId: videoId //params videoId used here
        };
        setUpcomingUpAd((prev = []) => [...prev, pollData]); // add new poll only for preview
        setFinalAds((prev = []) => [...prev, pollData]); // add new poll only for store to database

        // setPollQuestion('');
        // setPollOptions(['', '']);
        // const insert = await axiosPublic.post('/newpoll', pollData)
        // console.log(insert?.data);


    };

    // handle only text submit

    const handleOnlyTextSubmission = (e: React.FormEvent) => {
        e.preventDefault();
        const duration = Number(adDuration)
        const startTime = Number(currentTime)

        const onlyTextAd = {
            textTitle,
            textDesc,
            duration: duration,
            startTime: startTime,
            type: 'onlyText'
        }
        setUpcomingUpAd((prev = []) => [...prev, onlyTextAd])
        setFinalAds((prev = []) => [...prev, onlyTextAd])

        // setImageAds((prev = []) => [...prev, newAd]);

    }


    // Handle Ad Submit
    const handleAdSubmit = async (e: React.FormEvent) => {
        setIsLoading(true);
        e.preventDefault();

        if (!adImageUrl) {
            alert("Please select an image file.");
            return;
        }

        const durationNum = Number(adDuration);
        if (isNaN(durationNum) || durationNum <= 0) {
            alert("Please enter a valid duration (positive number).");
            return;
        }

        try {
            const formData = new FormData();
            formData.append("file", adImageUrl); // File object

            const res = await axiosPublic.post("/upload-image", formData);

            const uploadedImageUrl = res.data.url; // Cloudinary URL
            setIsLoading(false);
            toast.success("Ad image uploaded successfully!");
            console.log(uploadedImageUrl);
            const newAd: Ad = {
                id: `ad-${Date.now()}`,
                imageUrl: uploadedImageUrl,
                startTime: currentTime,
                duration: durationNum,
                videoId: videoId,
                type: "image",
            };

            setUpcomingUpAd((prev = []) => [...prev, newAd]);
            setFinalAds((prev = []) => [...prev, newAd]);

            setAdDuration("");
            setAdImageUrl(''); // reset file input
        } catch (err) {
            console.error(err);
            alert("Failed to upload image. Please try again.");
        }
    };


    return (
        <div className="space-y-6">
            {/* === Ad Form === */}
            {
                formType === 'ad' && (
                    <div>
                        <h2 className="font-medium text-gray-800 mb-3 border-b p-2">Ad Form</h2>
                        <form onSubmit={handleAdSubmit} className="space-y-3">
                            <div>
                                <input
                                    placeholder="Ad duration (seconds)"
                                    className="border-b w-full hover:border-b-blue-500 outline-none p-2"
                                    type="number"
                                    min="1"
                                    value={adDuration}
                                    onChange={(e) => setAdDuration(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => {
                                        if (e.target.files && e.target.files[0]) {
                                            setAdImageUrl(e.target.files[0]);
                                        }
                                    }}
                                    required
                                />


                            </div>
                            <small>Ad start time: {formatTime(currentTime)}</small>
                            <div>
                                <button
                                    type="submit"
                                    className="w-full mt-2 bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                                >
                                    {isLoading ? 'Uploading...' : 'Create Ad'}
                                </button>
                            </div>
                        </form>
                    </div>
                )
            }

            {/* === Poll Form === */}
            {
                formType === 'poll' && (
                    <div>
                        <h2 className="font-medium text-gray-800 mb-3 border-b p-2">Create Poll Form</h2>
                        <form onSubmit={handlePollSubmit} className="space-y-4">
                            <div>
                                <input
                                    placeholder="Enter your question?"
                                    className="border-b w-full hover:border-b-blue-500 outline-none p-2"
                                    value={pollQuestion}
                                    onChange={(e) => setPollQuestion(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    placeholder="Ad duration (seconds)"
                                    className="border-b w-full hover:border-b-blue-500 outline-none p-2"
                                    type="number"
                                    min="1"
                                    value={adDuration}
                                    onChange={(e) => setAdDuration(e.target.value)}
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Options</label>
                                {pollOptions.map((option, index) => (
                                    <div key={index} className="flex items-center gap-2 mb-2">
                                        <input
                                            type="text"
                                            placeholder={`Option ${index + 1}`}
                                            className="border-b flex-1 hover:border-b-blue-500 outline-none p-2"
                                            value={option}
                                            onChange={(e) => handleOptionChange(index, e.target.value)}
                                            required
                                        />
                                        {pollOptions.length > 2 && (
                                            <button
                                                type="button"
                                                onClick={() => removeOption(index)}
                                                className="text-red-500 hover:text-red-700 font-bold w-6 h-6 flex items-center justify-center"
                                            >
                                                ✕
                                            </button>
                                        )}
                                    </div>
                                ))}

                                <button
                                    type="button"
                                    onClick={addOption}
                                    className="text-sm text-blue-500 hover:underline flex items-center gap-1"
                                >
                                    ➕ Add Option
                                </button>
                            </div>

                            <small>Ad start time: {formatTime(currentTime)}</small>

                            <div>
                                <button
                                    type="submit"
                                    className="w-full mt-2 bg-green-500 text-white p-2 rounded hover:bg-green-600"
                                >
                                    Create Poll
                                </button>
                            </div>
                        </form>
                    </div>
                )
            }

            {
                formType === 'desc' && (
                    <div>
                        <h2 className="font-medium text-gray-800 mb-3 border-b p-2">Only Text</h2>
                        <form onSubmit={handleOnlyTextSubmission} className="space-y-4">
                            <div>
                                <input
                                    placeholder="Enter your question?"
                                    className="border-b w-full hover:border-b-blue-500 outline-none p-2"
                                    value={textTitle}
                                    onChange={(e) => setTextTitle(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    placeholder="Detail"
                                    className="border-b w-full hover:border-b-blue-500 outline-none p-2"
                                    value={textDesc}
                                    onChange={(e) => setDesc(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    placeholder="Ad duration (seconds)"
                                    className="border-b w-full hover:border-b-blue-500 outline-none p-2"
                                    type="number"
                                    min="1"
                                    value={adDuration}
                                    onChange={(e) => setAdDuration(e.target.value)}
                                    required
                                />
                            </div>



                            <small>Ad start time: {formatTime(currentTime)}</small>

                            <div>
                                <button
                                    type="submit"
                                    className="w-full mt-2 bg-green-500 text-white p-2 rounded hover:bg-green-600"
                                >
                                    Create Poll
                                </button>
                            </div>
                        </form>
                    </div>
                )
            }
        </div>
    );
};

// Optional: Default props with TypeScript-safe fallbacks


export default AdForm;