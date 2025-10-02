import { FastifyReply, FastifyRequest } from "fastify";
import prisma from "../../Prisma/prisma";
import { UserPayload } from "../../types/interface";

export const userVideo = async (req: FastifyRequest, reply: FastifyReply) => {
    const { userId, userRole } = req.user as UserPayload;

    if (!userId && !userRole) return reply.status(401).send({ message: 'Unauthorized access' })

    try {
        const isUserIdExist = await prisma.users.findUnique({ where: { id: userId } })

        if (!isUserIdExist) return reply.status(401).send({ message: 'Unauthorized access' })

        const getUserVideo = await prisma.videos.findMany({
            where: userRole === "admin"
                ? {}
                : { userId: userId },
            include: {
                polls: {
                    include: {
                        options: {
                            include: {
                                responses: true
                            }
                        },
                    },
                },
                questions: true,
            },
            orderBy: { createdAt: 'desc' }
        });

        if (!getUserVideo) return reply.status(404).send({ message: 'No video found' })

        const mergedVideo = getUserVideo.map(video => ({
            videoId: video.videoId,
            videoUrl: video.videoUrl,
            createdBy: video.createdBy,
            createdAt: video.createdAt,
            items: [...video.polls, ...video.questions].sort(
                (a, b) => parseFloat(a.startTime) - parseFloat(b.startTime)
            ),
        }));

        reply.status(200).send(mergedVideo ?? [])

    } catch (e) {
        console.log(e);
        return reply.status(500).send({ error: "Internal Server Error" });
    }
}