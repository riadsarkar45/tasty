import { FastifyReply, FastifyRequest } from "fastify";
import prisma from "../Prisma/prisma";

export const categoryVideoForPublic = async (req: FastifyRequest, reply: FastifyReply) => {

    const categoryVideo = await prisma.categories.findMany({

        include: {

            videos: true,
        },
    });


    if (!categoryVideo || categoryVideo.length === 0) {
        return reply.status(404).send({ error: "No categories found" });
    }

    reply.send({ videos: categoryVideo });
}
