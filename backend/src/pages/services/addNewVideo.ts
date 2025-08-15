import { FastifyInstance } from "fastify";
import { addNewPoll, getPolls } from "../../controllers/createNewPoll";

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
          question: { type: 'string' }, // optional unless needed
          options: {
            type: 'array',
            items: { type: 'string' },
            minItems: 2
          },
          imageUrl: { type: 'string' }, // for image type
          textTitle: { type: 'string' },
          textDesc: { type: 'string' }
        }
      }
    }
  },
  handler: addNewPoll
});

  fastify.get("/polls", getPolls)
}
