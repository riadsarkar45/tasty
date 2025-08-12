// src/database/database.ts
import { FastifyInstance } from 'fastify';
import prisma from '../Prisma/prisma';

export default async function databaseCon(fastify: FastifyInstance) {
  fastify.addHook('onReady', async () => {
    try {
      await prisma.$connect();
      fastify.log.info('✅ Prisma connected to database');
    } catch (err) {
      // ✅ Type guard: check if it's an Error
      if (err instanceof Error) {
        fastify.log.error('❌ Failed to connect Prisma: %s', err.message);
        // Or log structured:
        fastify.log.error({ error: err.message }, 'Prisma connection failed');
      } else {
        // Handle unknown error (e.g. string, null, object)
        fastify.log.error('❌ Unknown error connecting to Prisma');
      }
      process.exit(1);
    }
  });

  fastify.decorate('prisma', prisma);
}