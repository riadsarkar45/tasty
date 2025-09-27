import { FastifyInstance } from "fastify"
import { ParamsReq } from "../type&interface/interface"
import { videoCaption } from "../controllers/videoCaption"

export const getVideoCaption = async (fastify: FastifyInstance) => {
    fastify.get<{ Params: ParamsReq }>('/get-notes/:videoId?', { handler: videoCaption })
}