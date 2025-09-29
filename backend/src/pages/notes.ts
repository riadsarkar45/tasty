import { FastifyInstance } from "fastify";
import { getNotes, takeNotes } from "../controllers/takeNotes";
import { ParamsReq } from "../types/interface";

export default async function Notes(fastify: FastifyInstance) {

    fastify.post('/take-notes', {
        schema: {
            body: {
                type: 'object',
                required: ['videoId', 'startTime', 'duration', 'noteText', 'userId'],
                properties: {
                    videoId: { type: 'string' },
                    startTime: { type: 'number' },
                    duration: { type: 'number' },
                    noteText: { type: 'string' },
                    userId: { type: 'string' },
                }
            }
        }, handler: takeNotes
    })

    fastify.get<{ Params: ParamsReq }>('/get-notes/:videoId?', {
        handler: getNotes
    })
}