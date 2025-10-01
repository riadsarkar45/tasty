import { FastifyReply, FastifyRequest } from "fastify";
import prisma from "../../Prisma/prisma";
import { UserPayload } from "../../types/interface";

export const userVideo = async (req: FastifyRequest, reply: FastifyReply) => {
    const { userId, userRole } = req.user as UserPayload;
    console.log(userId, userRole, 'user video inside controller line 7');
    if (!userId) return reply.status(401).send({ message: 'Unauthorized access' })

    try {
        const isUserIdExist = await prisma.users.findUnique({ where: { id: userId } })

        if (!isUserIdExist) return reply.status(401).send({ message: 'Unauthorized access' })

        const getUserVideo = await prisma.videos.findMany({
            where: userRole === "admin"
                ? {}
                : { userId: userId },
        });

        if (!getUserVideo) return reply.status(404).send({ message: 'No video found' })

        reply.send(getUserVideo)

    } catch (e) {
        console.log(e);
        return reply.status(500).send({ error: "Internal Server Error" });
    }
}