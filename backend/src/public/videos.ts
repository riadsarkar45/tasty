import { FastifyInstance } from "fastify";
import { categoryVideoForPublic } from "../controllers/categoryVideo";
import { VideoParams } from "../types/interface";

export const getVideosForPublic = async (fastify: FastifyInstance) => {
    fastify.get<{ Params: VideoParams }>('/videos', categoryVideoForPublic)
}