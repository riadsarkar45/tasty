import { FastifyReply, FastifyRequest } from "fastify";
import prisma from "../../Prisma/prisma";
import { VideoParams } from "../../types/interface";

export const categoryVideoForPublic = async (req: FastifyRequest<{ Params: VideoParams }>, reply: FastifyReply) => {

    const { categoryName } = req.params;
    console.log(categoryName);
    const categoryVideo = await prisma.categories.findMany({
        where: categoryName ? { categoryName: categoryName } : {},

        include: {
            videos: true,

        },
    });


    if (!categoryVideo || categoryVideo.length === 0) {
        return reply.status(404).send({ error: "No category video found" });
    }

    reply.send({ videos: categoryVideo });
}

export const getMoreVideoFromUploaderId = async (req: FastifyRequest<{ Params: VideoParams }>, reply: FastifyReply) => {
    const { userId } = req.params;

    if (!userId) return reply.status(400).send({ error: "User ID is required" });

    const getMoreVideos = await prisma.videos.findMany(
        {
            where: {
                userId: Number(userId)
            },
            select: {
                videoId: true,
                videoTitle: true,
                categoryName: true,
            }
        }
    )

    if (!getMoreVideos || getMoreVideos.length === 0) return reply.status(404).send({ error: "No videos found for this user" });

    reply.send({ videos: getMoreVideos });
}
