import { FastifyReply, FastifyRequest } from "fastify";
import prisma from "../Prisma/prisma";

interface NewPollBody {
    question: string;
    startTime: number;
    duration: number;
    adType: string;
    options: string[];
}

export async function addNewPoll(
    req: FastifyRequest<{ Body: NewPollBody }>,
    reply: FastifyReply
) {
    const { question, startTime, duration, adType, options } = req.body;

    if (!options || !startTime || !duration || !adType || options.length === 0) {

        return reply.status(400).send({ error: "All fields are required" });

    }

    try {
        const createPoll = await prisma.poll.create({

            data: {
                createdBy: "Riad",

                question,

                startTime: startTime.toString(),

                duration: duration.toString(),

                type: adType,

                options: { create: options.map(opt => ({ options: opt })) }
            },

            include: { options: true }

        });

        return reply.status(201).send({ message: "Poll created successfully", poll: createPoll });

    } catch (error) {
        req.log.error(error);
        return reply.status(500).send({ error: "Internal Server Error" });
    }
}

export async function getPolls(req: FastifyRequest, reply: FastifyReply) {
    try {
        const getPolls = await prisma.poll.findMany({

            include: { options: true },

            orderBy: { createdAT: 'desc' },

        })

        if (getPolls.length === 0) return reply.status(404).send({ message: "No polls found" });

        return reply.status(200).send(getPolls);

    } catch (error) {
        req.log.error(error);
        return reply.status(500).send({ error: "Internal Server Error" });
    }
}
