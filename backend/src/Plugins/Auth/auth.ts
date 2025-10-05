import { FastifyRequest, FastifyReply } from 'fastify';
import { UserPayload } from '../../types/interface';
import prisma from '../../Prisma/prisma';

export const authenticate = async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    const token = request.cookies?.token;
    if (!token) {
      return reply.status(401).send({ message: 'No token in cookies' });
    }

    const decode = await request.server.jwt.verify(token);

    (request).user = decode

    const { userId, userEmail } = decode as UserPayload;

    const checkIfUserExist = await prisma.users.findUnique({ where: { email: userEmail, id: userId } })

    if (!checkIfUserExist && checkIfUserExist === "inActive") return reply.status(401).send({ message: 'Something went wrong. Please contact to the admin.' })

  } catch (err) {
    console.log('JWT verify failed:', err);
    return reply.status(401).send({ message: 'Unauthorized' });
  }
};