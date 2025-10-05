import { FastifyReply, FastifyRequest } from "fastify";
import { UserPayload, videoInteract } from "../../types/interface";
import prisma from "../../Prisma/prisma";

export const interactVideo = async (req: FastifyRequest<{ Body: videoInteract }>, reply: FastifyReply) => {

    const { userId } = req.user as UserPayload // from authenticate fastify plugin

    const { videoId, type } = req.body;

    if (!videoId && !type && !userId) return reply.status(404).send({ message: "Something went wrong. Please don't try again latter." })

    if (type === 'like') {

        const isLiked = await prisma.likes.findFirst({
            where: { userId: userId, videoId: videoId }
        })

        if (isLiked) return reply.status(409).send({ message: "Video already liked by you" })

        const like = await prisma.likes.create(
            {
                data: {
                    userId: userId,
                    videoId: videoId
                }
            }
        )

        if (like) return reply.status(200).send({ message: 'Thank you for your feedback' })
    }
}