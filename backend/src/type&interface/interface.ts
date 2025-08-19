export interface PollItem {
    question: string;
    startTime: number;
    duration: number;
    type: "poll" | "image" | "onlyText";
    options: string[];
    videoId: string;
    imageUrl?: string;
}

export type NewPollBody = PollItem[];

export interface NewVideoBody {
  videoId: string;
  videoUrl: string;
  createdBy: string;
  videoCategory?: string; // Optional field for video category
}

export interface ParamsReq {
  videoId?: string
}

export interface VideoParams {
    videoId: string;
}

