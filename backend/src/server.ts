import fastify from 'fastify';
import databaseCon from './database/database';
import polls from './pages/services/addNewVideo';
import cors from '@fastify/cors';

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
app.register(cors, {
  origin: 'http://localhost:5173',  // ✅ Your React frontend
  credentials: true,                // ✅ Allow sending cookies
});
app.register(polls)
databaseCon(app)
app.get('/', async () => {
  app.log.info('Handled /hello request');
  return { message: 'Hello! fastify server is running' };
});

try {
  const address =  app.listen({ port: 3000, host: '0.0.0.0' });
  app.log.info(`Server listening at ${address}`);
} catch (err) {
  app.log.error(err);
  process.exit(1);
}