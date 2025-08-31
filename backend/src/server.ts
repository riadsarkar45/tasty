import fastify from "fastify";
import databaseCon from "./database/database";
import polls from "./pages/services/addNewVideo";
import cors from "@fastify/cors";
import multipart from "@fastify/multipart";
import uploadNewImage from "./pages/services/addNewImage";
import { getVideosForPublic } from "./public/videos";

const app = fastify({
  logger: {
    transport: {
      target: "pino-pretty",
      options: {
        colorize: true,
        levelFirst: true,
        translateTime: "HH:MM:ss",
        ignore: "pid,hostname",
      },
    },
  },
});

//  CORS
app.register(cors, {
  origin: process.env.NODE_ENV === "production"
    ? "*" // In production, restrict to your domain
    : "http://localhost:5173",
  credentials: true,
});

// Plugins
app.register(multipart);
app.register(polls);
app.register(uploadNewImage);
app.register(getVideosForPublic, { prefix: "/api/v1/public" });

// Database connection
databaseCon(app);

//  Root route
app.get("/", async () => {
  app.log.info("Handled / request");
  return { message: "Hello! Fastify server is running 🚀" };
});

// Start server (Render uses this)
const start = async () => {
  try {
    const port = parseInt(process.env.PORT || "10000", 10);
    const address = await app.listen({ port, host: '0.0.0.0' });
    app.log.info(`Server listening at ${address}`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

// Only start server if not in serverless
if (require.main === module) {
  start();
}

//Export app for testing or serverless reuse
export default app;