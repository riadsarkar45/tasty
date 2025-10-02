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

import { UserPayload } from "./interface";


declare module "fastify" {
  interface FastifyRequest {
    user: UserPayload; // This tells TS: "req.user exists and has this shape"
  }
}