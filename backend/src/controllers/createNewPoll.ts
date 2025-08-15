import { FastifyReply, FastifyRequest } from "fastify";
import prisma from "../Prisma/prisma";

interface PollItem {
    question: string;
    startTime: number;
    duration: number;
    type: "poll" | "image" | "onlyText";
    options: string[];
    videoId: string;
    imageUrl?: string;
}

type NewPollBody = PollItem[];

export async function addNewPoll(
    req: FastifyRequest<{ Body: NewPollBody }>,
    reply: FastifyReply
) {

    const polls = req.body;

    console.log(polls);

    try {
        const results = {
            created: [] as unknown[],
            errors: [] as string[],
        };
        await Promise.all(
            polls.map(async (poll) => {

                const { question, startTime, duration, type, options, videoId, imageUrl } = poll;

                if (type === 'poll') {

                    if (!options|| !duration || !type || !videoId || options.length === 0) return results.errors.push(`Poll at ${startTime}s: missing required fields`);;

                    const poll = await prisma.poll.create({


                        data: {
                            createdBy: "Riad",

                            question,

                            startTime: startTime.toString(),

                            duration: duration.toString(),

                            type: type,

                            options: { create: options.map(opt => ({ options: opt })) },

                            // videoId: videoId
                        },

                        include: { options: true }

                    });
                    results.created.push(poll);
                } else if (type === 'image') {

                    if (!imageUrl || !duration) {
                        return results.errors.push("imageUrl is required for image ads")
                    }

                    const createPoll = await prisma.questions.create({

                        data: {
                            createdBy: "Riad",

                            imageUrl: imageUrl,

                            startTime: startTime.toString(),

                            duration: duration.toString(),


                        },

                    });

                    results.created.push(createPoll);
                }

            }))

        if (results.errors.length > 0) {
            return reply.send({
                message: "Some items failed to create",
                ...results,
            });
        }

        return reply.send({
            message: "All items created successfully",
            created: results.created,
        });

    } catch (error) {
        req.log.error(error);
        return reply.status(500).send({ error: "Internal Server Error" });
    }
}

export async function getPolls(req: FastifyRequest, reply: FastifyReply) {
    try {
        const [polls, imageQuestions] = await Promise.all([
            prisma.poll.findMany({
                include: { options: true },
                orderBy: { createdAT: "desc" },
            }),
            prisma.questions.findMany({
                orderBy: { createdAt: "desc" },
            }),
        ]);


        const ads = [
            ...polls.map(p => ({
                ...p,
                type: "poll",
                options: p.options
            })),
            ...imageQuestions.map(q => ({ ...q, type: "image" }))
        ];


        return reply.send(ads);
    } catch {
        return reply.status(500).send({ error: "Internal Server Error" });
    }
}


