// import { FastifyReply, FastifyRequest } from "fastify";
// import { UserPayload, videoInteract } from "../../types/interface";
// import prisma from "../../Prisma/prisma";

// export const interactVideo = async (req: FastifyRequest<{ Body: videoInteract }>, reply: FastifyReply) => {

//     const { userId } = req.user as UserPayload // from authenticate plugin

//     const { videoId, type } = req.body;

//     if (type === 'like') {
//         const like = await prisma.likes.create(
//             {
//                 data: {
//                     userId: userId,
//                     videoId: videoId
//                 }
//             }
//         )

//         if (like) return reply.status(200).send({ message: 'Thank you for your feedback' })
//     }
// }