import { FastifyReply, FastifyRequest } from "fastify";
import { Notes, ParamsReq } from "../type&interface/interface";
import prisma from "../Prisma/prisma";

export const takeNotes = async (req: FastifyRequest<{ Body: Notes }>, reply: FastifyReply) => {

    const { noteText, videoId, startTime, duration, userId } = req.body;

    if (!noteText && !videoId && userId) return reply.status(400).send({ error: "Notes are required" });

    try {
        const createNote = await prisma.notes.create(
            {
                data: {
                    videoId: videoId,
                    startTime: startTime,
                    duration: duration,
                    noteText: noteText,
                    userId: "645+432"
                }
            }
        )

        if (!createNote) return reply.status(500).send({ error: "Failed to save notes" });

        reply.status(200).send({ message: "Notes saved successfully", note: createNote });
    } catch (error) {
        req.log.error(error);
        return reply.status(500).send({ error: "Internal Server Error" });
    }

}

export const getNotes = async (req: FastifyRequest<{ Params: ParamsReq }>, reply: FastifyReply) => {
    try {
        const { videoId } = req.params;

        if (!videoId) return reply.status(400).send({ error: "Video ID is required" });

        const notes = await prisma.notes.findMany(
            {
                where: { videoId }
            }
        );

        if (!notes || notes.length === 0) {
            return reply.status(404).send({ error: "No notes found" });
        }

        reply.status(200).send(notes);
    } catch (error) {
        req.log.error(error);
        return reply.status(500).send({ error: "Internal Server Error" });
    }
}