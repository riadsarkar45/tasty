import { FastifyReply, FastifyRequest } from "fastify";
import { ParamsReq } from "../type&interface/interface";
import { getSubtitles } from 'youtube-captions-scraper';

export const videoCaption = async (
  req: FastifyRequest<{ Params: ParamsReq }>,
  reply: FastifyReply
) => {
  const { videoId } = req.params;

  if (!videoId) {
    return reply.status(400).send({ message: "Video ID is required" });
  }

  try {
    // Call getSubtitles correctly
    const captions = await getSubtitles({ videoID: videoId, lang: 'en' });

    if (!captions || captions.length === 0) {
      return reply.status(404).send({ message: "No captions found for this video" });
    }

    // Return captions
    return reply.send({ captions });
  } catch (error: any) {
    return reply.status(500).send({ message: "Server Error", error: error.message });
  }
};
