import { FastifyRequest, FastifyReply } from 'fastify';

export const authenticate = async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    console.log(request.cookies, 'cookies in auth middleware');
    await request.jwtVerify();
  } catch (err) {
    console.log(err);
    reply.status(401).send({message:'Unauthorized access'});
  }
};