import { FastifyInstance } from "fastify";
import { userRegistration } from "../../controllers/Users/userRegistration";

export const UserRegistration = async (fastify: FastifyInstance) => {
  fastify.post('/user-registration', {
    schema: {
      body: {
        type: 'object',
        required: ['name', 'email', 'password'],
        properties: {
          name: { type: 'string' },
          email: { type: 'string', format: 'email' },
          password: { type: 'string', minLength: 6 }
        }
      }
    }, handler: userRegistration
  });
};
