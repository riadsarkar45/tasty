import { FastifyInstance } from "fastify";
import { interactVideo } from "../../controllers/Users/videoIntreact";
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
        }, preHandler: authenticate ,handler: interactVideo
    })

}