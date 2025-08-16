import { FastifyInstance } from "fastify";
import { addNewPoll, createNewVideo, getCreatedVideos, getPolls } from "../../controllers/createNewPoll";
import { VideoParams } from '../../type&interface/interface';

export default async function polls(fastify: FastifyInstance) {

  fastify.post('/newpoll', {
    schema: {
      body: {
        type: 'array',
        items: {
          type: 'object',
          required: ['startTime', 'duration', 'type'],
          properties: {
            type: { type: 'string' },
            startTime: { type: 'number' },
            duration: { type: 'number' },
            question: { type: 'string' },
            videoId: { type: 'string' },
            options: {
              type: 'array',
              items: { type: 'string' },
              minItems: 2
            },
            imageUrl: { type: 'string' },
            textTitle: { type: 'string' },
            textDesc: { type: 'string' }
          }
        }
      }
    },
    handler: addNewPoll
  });

  fastify.post('/create-video', {
    schema: {
      body: {
        type: 'object',

        required: ['videoId', 'videoUrl', 'createdBy']

      }
    }
  }, createNewVideo)

  fastify.get("/polls", getPolls)
  
  fastify.get<{ Params: VideoParams }>('/videos/:videoId?', getCreatedVideos);
}
