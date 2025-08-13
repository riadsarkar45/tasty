export interface NewPollBody {
  question: string;
  startTime: string;   // or Date, if you convert it
  duration: number;
  adType: "image" | "video" | string; // if you have specific types
  options: string[];   // array of option strings
}