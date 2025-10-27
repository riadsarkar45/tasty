import { FastifyInstance } from "fastify";
import { categoryVideoForPublic, getMoreVideoFromUploaderId } from "../controllers/posts/categoryVideo";
import { VideoParams } from "../types/interface";

export const getVideosForPublic = async (fastify: FastifyInstance) => {
    fastify.get<{ Params: VideoParams }>('/videos/:categoryName?', categoryVideoForPublic)

    fastify.get<{ Params: VideoParams }>('/more_videos/:userId?', getMoreVideoFromUploaderId)
}