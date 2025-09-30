import { FastifyInstance } from "fastify";
import { authenticate } from "../../../Plugins/Auth/auth";
import { loggedInUser } from "../../../controllers/Users/loggedInUser";

export const getLoggedInUser = (fastify: FastifyInstance) => {
    fastify.get('/logged-in-user', {preHandler: [authenticate], handler: loggedInUser})
}