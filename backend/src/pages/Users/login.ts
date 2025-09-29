import { FastifyInstance } from "fastify";
import { Login } from "../../controllers/Users/login";

export const UserLogin = async (fastify: FastifyInstance) => {
  fastify.post<{ Body: { email: string; password: string } }>('/login', {
    schema: {
      body: {
        type: 'object',
        required: ['email', 'password'],
        properties: {
          email: { type: 'string', format: 'email' },
          password: { type: 'string', minLength: 6 }
        }
      }
    },
    handler: Login
  });
}
