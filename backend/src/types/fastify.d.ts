// src/types/fastify.d.ts
import 'fastify';
import '@fastify/jwt';
import { FastifyRequest, FastifyReply } from 'fastify';

declare module 'fastify' {
  interface FastifyInstance {
    jwt: import('@fastify/jwt').FastifyJWT;
    authenticate: (req: FastifyRequest, reply: FastifyReply) => Promise<void>;
  }
}
