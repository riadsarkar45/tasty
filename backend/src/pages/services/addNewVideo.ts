import { FastifyInstance } from "fastify";
import { addNewPoll, getPolls } from "../../controllers/createNewPoll";

export default async function polls(fastify: FastifyInstance) {
  fastify.post("/newpoll", {
    schema: {
      body: {
        type: "object",
        properties: {
          question: { type: "string" }
        },
        required: ["question", "options", "startTime", "duration", "adType"],
      }
    },
    handler: addNewPoll
  });

  fastify.get("/polls", getPolls)
}
