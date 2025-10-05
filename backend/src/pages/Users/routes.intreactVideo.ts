import { FastifyInstance } from "fastify";
import { commentVideo, interactVideo } from "../../controllers/Users/videoIntreact";
import { authenticate } from "../../Plugins/Auth/auth";

export const routeVideoInteractVideo = async (fastify: FastifyInstance) => {

    fastify.post('/post-interact', {
        schema: {
            body: {
                type: 'object',
                required: ['videoId', 'type'],
                properties: {
                    videoId: { type: 'string' },
                    type: { type: 'string' },
                }
            }
        }, preHandler: authenticate, handler: interactVideo
    })

    fastify.post('/comment-video', {
        schema: {
            body: {
                type: 'object',
                required: ['comment', 'videoId'],
                properties: {
                    comment: { type: 'string' },
                    videoId: { type: 'string' }
                }
            }
        }, preHandler: authenticate, handler: commentVideo
    })

}