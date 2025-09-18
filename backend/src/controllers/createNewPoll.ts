import { FastifyReply, FastifyRequest } from "fastify";
import prisma from "../Prisma/prisma";
import { NewVideoBody, NewPollBody, VideoParams, PollSubmission } from '../type&interface/interface';



export async function addNewPoll(
    req: FastifyRequest<{ Body: NewPollBody }>,
    reply: FastifyReply
) {

    const polls = req.body;


    try {
        const results = {
            created: [] as unknown[],
            errors: [] as string[],
        };
        await Promise.all(
            polls.map(async (poll) => {

                const { question, startTime, duration, type, options, videoId, imageUrl } = poll;

                if (type === 'poll') {

                    if (!options || !duration || !type || !videoId || options.length === 0) return results.errors.push(`Poll at ${startTime}s: missing required fields`);;

                    const poll = await prisma.poll.create({


                        data: {
                            createdBy: "Riad",

                            question,

                            startTime: startTime.toString(),

                            duration: duration.toString(),

                            type: type,

                            options: { create: options.map(opt => ({ options: opt })) },

                            videoId: videoId
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

                            videoId: videoId
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

export async function createNewVideo(req: FastifyRequest<{ Body: NewVideoBody }>, reply: FastifyReply) {
    console.log("Creating new video with data:", req.body);
    const { videoId, videoUrl, createdBy, videoCategory } = req.body;

    if (!videoId || !videoUrl || !createdBy) return reply.status(400).send({ error: "videoId, videoUrl, and createdBy are required" });

    try {

        const isVideoExists = await prisma.videos.findUnique({
            where: { videoId }
        })

        if (isVideoExists) return reply.status(400).send({ error: "Video with this ID already exists" });

        const saveVideo = await prisma.videos.create({
            data: {
                videoId,
                videoUrl,
                createdBy,
                category: videoCategory
                    ? {
                        connectOrCreate: {
                            where: { categoryName: videoCategory },
                            create: { categoryName: videoCategory },
                        },
                    }
                    : undefined,
            },
        });


        if (saveVideo) {

            return reply.status(201).send({ message: "Video created successfully", video: saveVideo });
        }

        reply.send({ message: "Something went wrong while creating video" });

    } catch (error) {
        console.error("Error creating video:", error);
        return reply.status(500).send({ error: "Internal Server Error" });
    }
}

export async function getCreatedVideos(req: FastifyRequest<{ Params: VideoParams }>, reply: FastifyReply) {
    try {
        const { videoId } = req.params;

        const videos = await prisma.videos.findMany({
            where: videoId ? { videoId } : undefined,
            include: {
                polls: {
                    include: {
                        options: {
                            include:{
                                responses: true
                            }
                        },
                    },
                },
                questions: true,
            },
            orderBy: { createdAt: "desc" },
        });



        if (!videos) {
            return reply.status(404).send({ message: "No video found" });
        }


        const formattedVideos = videos.map(video => ({ // merged to array questions and polls to one array
            videoId: video.videoId,
            videoUrl: video.videoUrl,
            createdBy: video.createdBy,
            createdAt: video.createdAt,
            items: [...video.polls, ...video.questions].sort(
                (a, b) => parseFloat(a.startTime) - parseFloat(b.startTime)
            ),
        }));

        return reply.send(formattedVideos ?? []);
    } catch (err) {
        console.error("Error fetching created videos:", err);
        return reply.status(500).send({ error: "Internal Server Error" });
    }
}

export const submitPollResponse = async (req: FastifyRequest<{ Body: PollSubmission }>, reply: FastifyReply) => {
    const { selectedOption, pollOptionId, pollId, userId } = req.body;
    console.log(pollId, userId);

    if (!pollId && !userId) return reply.status(404).send({ message: "Something went wrong please try again later" });

    // const response = await prisma.pollResponses.findFirst({
    //     where: {
    //         submittedBy: userId,
    //     },
    // });

        const submit = await prisma.pollResponses.create(
            {
                data: {
                    submittedBy: ' static userId',
                    selectedOption: selectedOption,
                    pollOptionId: pollOptionId,
                    submittedAt: new Date().toISOString(),
                }
            }
        )

        if (submit) {
            reply.send({ message: 'Response stored' })
        }
    
}
