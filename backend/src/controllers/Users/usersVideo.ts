import { FastifyReply, FastifyRequest } from "fastify";
import { UserId } from "../../types/interface";
import prisma from "../../Prisma/prisma";

export const userVideo = async (req: FastifyRequest<{ Params: UserId }>, reply: FastifyReply) => {
    const { userId, role } = req.params;

    if (!userId) return reply.status(401).send({ message: 'Unauthorized access' })

    try {
        const isUserIdExist = await prisma.users.findUnique({ where: { id: userId } })

        if (!isUserIdExist) return reply.status(401).send({ message: 'Unauthorized access' })
        // const where = role === 'admin'
        //     ? {}
        //     : { createdBy: userId };
        // const getUserVideo = await prisma.videos.findMany(
        //     {
        //         where,
        //     }
        // )
    } catch (e) {
        console.log(e);
        return reply.status(500).send({ error: "Internal Server Error" });
    }
}