import { FastifyReply, FastifyRequest } from "fastify";

export const loggedInUser = async (req: FastifyRequest, reply: FastifyReply) => {
    const user = req.user;
    return reply.send(user);
} 