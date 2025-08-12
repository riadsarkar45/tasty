import fastify from 'fastify';
import databaseCon from './database/database';

const app = fastify({
  logger: {
    transport: {
      target: 'pino-pretty',
      options: {
        colorize: true,
        levelFirst: true,
        translateTime: 'HH:MM:ss',
        ignore: 'pid,hostname',
      },
    },
  },
});
databaseCon(app)
app.get('/', async (request, reply) => {
  app.log.info('Handled /hello request');
  return { message: 'Hello!' };
});

try {
  const address =  app.listen({ port: 3000, host: '0.0.0.0' });
  app.log.info(`Server listening at ${address}`);
} catch (err) {
  app.log.error(err);
  process.exit(1);
}