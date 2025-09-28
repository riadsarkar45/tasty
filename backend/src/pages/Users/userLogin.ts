import { FastifyInstance } from "fastify";
import { userRegistration } from "../../controllers/Users/userRegistration";
import { Users } from "../../type&interface/interface";

export const UserRegistration = async (fastify: FastifyInstance) => {
    fastify.post<{ Body: Users }>('/user-registration', {
        schema: {
            body: {
                type: 'object',
                required: ['name', 'email', 'password'],
                properties: {
                    name: { type: 'string' },
                    email: { type: 'string', format: 'email' },
                    password: { type: 'string', minLength: 8 },
                    profilePic: { type: 'string', format: 'uri', nullable: true },
                }
            }
        }, handler: userRegistration
    });
};
