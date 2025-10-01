import { FastifyInstance } from "fastify";
import { userVideo } from "../../../controllers/Users/usersVideo";
import { authenticate } from "../../../Plugins/Auth/auth";

export const routeUserVideo = async (fastify: FastifyInstance) => {


    fastify.get('/user-video', { preHandler: [authenticate], handler: userVideo })


}