import { FastifyPluginAsync } from "fastify";
import { allUsers } from "../../../controllers/Users/allUsers";
import { authenticate } from "../../../Plugins/Auth/auth";

export const getAllUsers: FastifyPluginAsync = async (fastify) => {
  fastify.get('/all-users', {
    preHandler: [authenticate], 
    handler: allUsers,
  });
};
