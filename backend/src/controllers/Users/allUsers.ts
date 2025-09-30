import { FastifyReply, FastifyRequest } from "fastify";
import prisma from "../../Prisma/prisma";

export const allUsers = async (req: FastifyRequest, reply: FastifyReply) => {
    const isUserExist = await prisma.users.findMany()

    if (!isUserExist) return reply.status(404).send({ error: "No users found" });

    return reply.status(200).send(isUserExist);
}