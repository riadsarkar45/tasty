import { FastifyInstance } from "fastify";
import { categoryVideoForPublic } from "../controllers/categoryVideo";
import { VideoParams } from "../type&interface/interface";

export const getVideosForPublic = async (fastify: FastifyInstance) => {
    fastify.get<{ Params: VideoParams }>('/videos', categoryVideoForPublic)
}